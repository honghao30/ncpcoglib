
import styled from 'styled-components'
// import { UnorderedListOutlined } from 'antd';
// import 'antd/dist/reset.css';

const ViewTypeSelect = styled.div`
    display:flex;
    justify-content:flex-end;
    padding:16px;
    gap:10px;
`;


function List() {
  return (
    <div>
       <ViewTypeSelect>
            <button 
            type='button' 
            className='is-active'
            >
                썸네일
            </button>
            <button 
            type='button'
            >
               목록
                {/* <UnorderedListOutlined /> */}
            </button>
       </ViewTypeSelect>
    </div>
  );
}

export default List;
