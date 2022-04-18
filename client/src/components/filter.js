
export const getFilteredRows = (data, filterKey) => {
    console.log(data)
    return data.filter((single) => {
        return Object.values(single).some((s) =>{
                return ("" + s).toLowerCase().includes(filterKey.toLowerCase())
            }
        );
    });
};

export const filterTopic = (data, topics, filterKey) => {
    return data.filter((business) => {

        if(typeof topics === 'string'){
            return ("" + business[topics]).toLowerCase().includes(filterKey.toLowerCase())
        }else{
            return topics.some((topic) => {
                return ("" + business[topic]).toLowerCase().includes(filterKey.toLowerCase())
            })
        }
    });
};
