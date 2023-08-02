const SearchResultsRow = ({house}) => {
    const setActive = ()=>{}
    return ( 
        <div>
            <tr key={house.id} onClick={setActive}>
                <td>{house.address}</td>
                <td>{house.price}</td>
                <td>{house.likes}</td>
        </tr>
        </div>
     );
}
 
export default SearchResultsRow;