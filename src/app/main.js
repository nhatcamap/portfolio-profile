const menuAction = (option) =>{
    const header = document.querySelector(option.header);
    if(header){
        const menuItems = header.querySelector(option.menuItems);
        const menuButton = header.querySelector(option.menuButton);
        if(menuButton && menuItems){
            menuButton.onclick = () =>{
                menuButton.classList.toggle(option.menuButtonActive);
                menuItems.classList.toggle(option.menuItemsActive);
            }
        }
    } 
    const contact = document.querySelector(option.contact);
    if(contact){
        const contactBtn = contact.querySelector(option.contactBtn);
        if(contactBtn){
            contactBtn.onclick = () =>{
                alert('Thank you for contacting us!');
            }
        }
    }
}
const projectAction = (option) =>{
    const project = document.querySelector(option.project);
    const worksContainer = document.querySelector(option.worksContainer);
    if(project && worksContainer){
        let imgWorks = worksContainer.querySelectorAll(option.imgWorks);
        const projectClose = project.querySelector(option.projectClose);

        Array.from(imgWorks).forEach((img) =>{
            img.onclick = () =>{
                project.style.display = 'flex';
            }
        });
        projectClose.onclick = () =>{
            project.style.display = 'none';
        }
    }
}