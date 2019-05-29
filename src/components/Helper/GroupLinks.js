

const groupLinks = (title, link) =>{

   
    const groupedOb = {
        newTitle: title,
        newLink: link
    }

    return groupedOb;

}





const linksToArr = (titles) =>{

    const tmpArr = [];

    try 
    {
        for (let  i = 0; i < titles.length; i++)
        {
            const tmpObj = groupLinks(titles[i]);
            tmpArr.push(tmpObj);
        }
            return tmpArr;
    } 
    catch (error) {
        console.log(error);
    }
    

}






export default linksToArr;
