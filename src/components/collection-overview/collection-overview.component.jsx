import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCollectionForPreview } from "../../redux/shop/shop.selectors";

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import "./collection-overview.styles.scss";

const CollectionOverview = ({ collections }) => (
    <div className="collection-overview">
        {collections.map(({id, ...otherCollProps}) => (
            <CollectionPreview key={id} {...otherCollProps}/>
        ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview
});

export default connect(mapStateToProps)(CollectionOverview);
