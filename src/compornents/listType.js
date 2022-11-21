
import styled from 'styled-components'
import { UnorderedListOutlined,AppstoreOutlined } from '@ant-design/icons';

const ViewTypeSelect = styled.div`
    display:flex;
    justify-content:flex-end;
    padding:16px;
    gap:10px;
`;


function ListType() {
  return (
    <div>
      
       <ViewTypeSelect>
            <button 
            type='button' 
            className='is-active'
            >
                
                <span className='ir-text'>썸네일</span>
                <AppstoreOutlined />
            </button>
            <button 
            type='button'
            >
               <span className='ir-text'>목록</span>
                <UnorderedListOutlined />
            </button>
       </ViewTypeSelect>
    </div>
  );
}

export default ListType;
