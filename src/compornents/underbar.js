
import styled from 'styled-components'
// import { UnorderedListOutlined,AppstoreOutlined } from '@ant-design/icons';

const BoomUtilWrap = styled.div`
    position:fixed;
    display:flex;
    justify-content:space-around;   
    gap:0px;
    left:0;
    bottom:0;
    width:100%;
    height:50px;
`;


function BootomUtil() {
  return (
    <BoomUtilWrap>
        <button type='button'>
            목록
        </button>
        <button type='button'>
            원본파일
        </button>  
        <button type='button'>
            홈으로
        </button>          
        <button type='button'>
            오디오
        </button>        
        <button type='button'>
            다크모드
        </button>        
       
    </BoomUtilWrap>
  );
}

export default BootomUtil;
