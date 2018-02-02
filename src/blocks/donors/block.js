/**
 * Block dependencies
 */
import CampaignSelect from './../campaign-select/index.js';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

const { Component } = wp.element;

const {
    InspectorControls,
    BlockDescription,
} = wp.blocks;

const {
    PanelBody,
    PanelRow,
    withAPIData 
} = wp.components;

const {
    SelectControl,
    ToggleControl,
    RangeControl
} = InspectorControls;

class CharitableDonorsBlock extends Component {
	constructor() {
		super( ...arguments );

        this.toggleDisplayDonorName = this.toggleDisplayDonorName.bind( this );
        this.toggleDisplayDonorLocation = this.toggleDisplayDonorLocation.bind( this );
        this.toggleDisplayDonorAvatar = this.toggleDisplayDonorAvatar.bind( this );
    }
    
    toggleDisplayDonorName() {
		const { displayDonorName } = this.props.attributes;
		const { setAttributes } = this.props;

		setAttributes( { displayDonorName: ! displayDonorName } );
    }
    
    toggleDisplayDonorLocation() {
		const { displayDonorLocation } = this.props.attributes;
		const { setAttributes } = this.props;

		setAttributes( { displayDonorLocation: ! displayDonorLocation } );
    }
    
    toggleDisplayDonorAvatar() {
		const { displayDonorAvatar } = this.props.attributes;
		const { setAttributes } = this.props;

		setAttributes( { displayDonorAvatar: ! displayDonorAvatar } );
    }
    
    render() {
        const setCampaign = ( campaign ) => this.props.setAttributes( { campaign: campaign } );
		const { attributes, focus, setAttributes } = this.props;
        const { number, orderBy, campaign, displayDonorName, displayDonorLocation, displayDonorAvatar } = attributes;
        
        const inspectorControls = focus && (
            <InspectorControls key="inspector" description={ __( 'Configure' ) }>
                <PanelBody title={ __( 'Filter & Sort' ) }>
                    <PanelRow>
                        <RangeControl
                            key="filter-panel-number-control"
                            label={ __( 'Number of donors' ) }
                            value={ number }
                            onChange={ ( value ) => setAttributes( { number: value } ) }
                            min="-1"
                            max="999"
                        />
                    </PanelRow>
                    <PanelRow>
                        <CampaignSelect
                            key="filter-panel-campaign-select"
                            label={ __( 'Campaign' ) }
                            selectedCampaign={ campaign }
                            onChange={ setCampaign }
                        />
                    </PanelRow>
                    <PanelRow>
                        <SelectControl
                            key="filter-panel-orderby-select"
                            label={ __( 'Order by' ) }
                            value={ orderBy }
                            options={ [
                                {
                                    label: __( 'Most recent' ),
                                    value: 'recent',
                                },
                                {
                                    label: __( 'Amount donated' ),
                                    value: 'amount',
                                },
                            ] }
                            onChange={ ( value ) => setAttributes( { orderBy: value } ) }
                        />
                    </PanelRow>
                </PanelBody>
                <PanelBody title={ __( 'Display Settings' ) }>
                    <PanelRow>
                        <ToggleControl
                            label={ __( 'Display the name of the donor' ) }
                            checked={ displayDonorName }
                            onChange={ this.toggleDisplayDonorName }
                        />
                    </PanelRow>
                    <PanelRow>
                        <ToggleControl
                            label={ __( 'Display the location of the donor' ) }
                            checked={ displayDonorLocation }
                            onChange={ this.toggleDisplayDonorLocation }
                        />
                    </PanelRow>
                    <PanelRow>
                        <ToggleControl
                            label={ __( 'Display the avatar of the donor' ) }
                            checked={ displayDonorAvatar }
                            onChange={ this.toggleDisplayDonorAvatar }
                        />
                    </PanelRow>
                </PanelBody>
            </InspectorControls>
        );
        
        return [
            inspectorControls,
            <p>
                { __( 'DONORS' ) }
            </p>
        ];
    }
}

export default CharitableDonorsBlock;