
import styled from 'styled-components'


const SearchWrap = styled.div`
    border-top:1px solid #ccc;
    border-bottom:1px solid #f7f7f7;
    padding:calc(25 / 750 * 100vw) 16px calc(15 / 750 * 100vw);;
    display:flex;
    background:#eeeeee;
    
    input[type='text'] {
        height: calc(50 / 750 * 100vw);
        border:1px solid #ccc;
        width: calc(100% - 35px);
        background:#fff;
    }
    .searchIcon {
        height: calc(50 / 750 * 100vw);
    }
`;

function Search() {
  return (
    <div>
       <form>
            <SearchWrap>
                <input type="text" />
                <button type="button">
                   {/* <CircumIcon 
                    name="search" 
                    color="#000" 
                    className="searchIcon"
                    >
                   </CircumIcon> */}
                </button>                
            </SearchWrap>
       </form>
    </div>
  );
}

export default Search;
