import React from 'react';
import PreviewCollection from '../../components/preview-collection/preview-collection.component';
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection.component';
import CollectionsOverview from '../../components/collections-overview/collection-overview.component';

import './shop.styles.scss';

const ShopPage =({match}) =>(

            <div className='shop-page'>
                <Route exact path={`${match.path}`} component={CollectionsOverview}/>
                <Route exact path={`${match.path}/:collectionId`} component={CollectionPage}/>
            </div>
            );


export default ShopPage;