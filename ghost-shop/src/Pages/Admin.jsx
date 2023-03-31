import React from 'react'
import EditPost from '../Uma_Sahni/Admin/EditPost'
import NewPost from '../Uma_Sahni/Admin/NewPost'
import PageDesign from '../Uma_Sahni/Admin/PageDesign'




const Admin = () => {
 
  return (
    <div>
       <PageDesign> 
        {/* <NewPost/>  */}
        <EditPost/>
       </PageDesign>
    </div>
  )
}

export default Admin