import React from 'react';
import PreviewCollection from '../../components/preview-collection/preview-collection.component';
import CollectionsOverview from '../../components/collections-overview/collection-overview.component';

import './shop.styles.scss';

const ShopPage =({collections}) =>(

            <div className='shop-page'>
                <CollectionsOverview></CollectionsOverview>
            </div>
            );


export default ShopPage;