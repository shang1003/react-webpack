import React from 'react';
import renderRoutes from '../../utils/RouterConfig';
import DocumentTitle from 'react-document-title';


const BlankLayout =({routes})=>{
  console.log(routes,'BlankLayout');
  return (
    <DocumentTitle title={"毕尚系统"}> 
        <div>{renderRoutes(routes)}</div>
    </DocumentTitle>
  );
}
export default BlankLayout
