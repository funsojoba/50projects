const tabContent = [
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 

    'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',

    'Nullam aliquet finibus vehicula. Nulla vitae quam nisl. Proin tellus mauris, imperdiet eget orci vitae, rhoncus ornare tellus. Nam feugiat ligula eros, consectetur condimentum turpis mollis laoreet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec euismod risus convallis nisl sagittis eleifend. Mauris a felis sed sem pellentesque vehicula quis sed orci. Maecenas mattis ante varius lorem vehicula, non condimentum augue iaculis. Sed et augue eu sapien sodales bibendum in vitae arcu. In augue magna, egestas quis facilisis bibendum, vulputate porttitor massa. Aliquam vitae orci id metus congue porta. Nulla posuere mi ut leo posuere, ut gravida justo hendrerit.',

    'Ut gravida, lorem dictum auctor ornare, tortor nibh efficitur eros, a viverra elit augue sed eros. In fringilla metus ut turpis posuere, posuere cursus est condimentum. Integer et eros nec magna tempor euismod. Cras nec sem odio. Sed porttitor nulla vel interdum malesuada. Pellentesque est purus, egestas ut accumsan at, dignissim quis mi. Quisque vitae ante quis massa pellentesque dapibus ullamcorper eget magna. Sed elit massa, placerat sed lacinia eget, luctus sed diam. Ut lobortis erat porttitor tortor consequat malesuada. Suspendisse bibendum facilisis tortor eget ultrices. Nullam nunc sem, placerat vehicula consequat sit amet, volutpat sed orci. Cras vitae purus bibendum odio sollicitudin commodo. Quisque ante risus, porta eu risus rhoncus, cursus auctor erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',

    'Cras quis lacus fringilla, pharetra ligula scelerisque, accumsan lacus. Aenean facilisis ex tortor, eu tempor erat molestie id. Ut a pulvinar magna, vitae accumsan turpis. Nunc sodales est eu quam fringilla, fringilla tincidunt nisl rutrum. Integer et pulvinar orci, eget efficitur neque. Aliquam id aliquet dolor, ac dictum dui. Sed vitae tortor nisl. Nunc iaculis diam congue maximus dapibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus tristique molestie mauris eu consectetur. Maecenas eleifend eget sapien id euismod. Phasellus maximus, eros et ornare consectetur, nibh purus fringilla velit, eget feugiat arcu erat vitae leo. Quisque a libero non massa condimentum cursus nec consequat ante. Nullam volutpat mattis metus, at fringilla erat pellentesque quis.'
];


const tabHead = document.querySelectorAll(".tab-head-content");
const tabBody = document.querySelector(".tab-body-content");

let tabArray = Array.from(tabHead)

tabArray.forEach(element =>{
    element.addEventListener("click", ()=>{
        removeActive();
        element.classList.add("active");

        let indexNumber = tabArray.indexOf(element);

        tabBody.innerHTML = tabContent[indexNumber]
    })
})

function removeActive(){
    tabHead.forEach(tab =>{
        tab.classList.remove("active")
    })
}