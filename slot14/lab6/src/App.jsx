import React from 'react';
import CreatePost from './component/CreatePost';
import AxiosDemo from './component/AxiosDemo';
import PostList from './component/PostList';
import PatchPost from './component/PatchPost';
import UpdatePost from './component/UpdatePost';
import DeletePost from './component/DeletePost';
import RequestConfig from './component/RequestConfig'; 
function App() {
  return (
    <div>
      <CreatePost />
      <AxiosDemo />
      <PostList />
      <PatchPost />
      <UpdatePost />
      <DeletePost />
      <RequestConfig />
    </div>
  );
}

export default App;