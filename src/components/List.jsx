import React from 'react';

const List = (props) => {
    let listItems = props.items.map((item) => {
        return (
            <div key={item.id} className="card">
                <div className="card-header">
                    Chirp
                </div>
                <div className="card-body">
                    <p className="card-text">{item.value}</p>
                </div>
                <div className="card-footer">
                </div>
            </div>
        );
    });

    return (

        <div>
            {listItems}
        </div>
            
        
    );
}

export default List;