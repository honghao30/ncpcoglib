
import styled from 'styled-components'
import { BarsOutlined,HddOutlined,HomeOutlined,PlayCircleOutlined,BulbOutlined } from '@ant-design/icons';

const BoomUtilWrap = styled.div`
    position:fixed;
    display:flex;
    justify-content:space-around;   
    gap:0px;
    left:0;
    bottom:0;
    width:100%;
    height:60px;
    background-color:#f0f1f1;
    button {
        color:#37434b;
        font-size:25px;
    }

`;


function BootomUtil() {
  return (
    <BoomUtilWrap>
        
        <button type='button'>
            <BarsOutlined />
            <span className="ir-text">목록</span>
        </button>
        <button type='button'>
            <HddOutlined />
            <span className="ir-text">원본파일</span>
        </button>  
        <button type='button'>
            <HomeOutlined />
            <span className="ir-text">홈으로</span>            
        </button>          
        <button type='button'>
            <PlayCircleOutlined />
            <span className="ir-text">오디오</span> 
        </button>        
        <button type='button'>
            <BulbOutlined />
            <span className="ir-text">다크모드</span>            
        </button>        
       
    </BoomUtilWrap>
  );
}

export default BootomUtil;
