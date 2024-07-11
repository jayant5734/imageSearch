let Acces_key = "9WFCTK54983nCCiTcd6FU_FsOL6LwR2-iR2VC8h73dE";

const getData= async () =>{
    let fectching = await  fetch(`https://api.unplash.com/search/photos?query=dog&per_Page=28&P=1 age&client_id=${Acces_key}`);
    console.log(fectching);
}
getData()




