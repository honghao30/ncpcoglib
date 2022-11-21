
import styled from 'styled-components'

const HeadSection = styled.div`
  width:100%;
  height:80px;
  text-align:center;
  font-size:30px;
  padding:15px 0;
  font-weight:500;
`;

function Header() {
  return (
    <div>
        <HeadSection>
            도서관
        </HeadSection>        
    </div>
  );
}

export default Header;
