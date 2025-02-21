function loadForm(userType) {
    let formContent = "";
    
    if (userType === "student") {
        formContent = `
        <div class="inputs">
    <label for="reg_no">Registration Number</label>
    <input type="text"name="reg_no" id="reg_no" placeholder="Enter Reg No.">
    <label for="stud_no">Student Number</label>
    <input type="text"name="stud_no" id="stud_no" placeholder="Enter Student No."> 
    <label for="hall">Choose Your Hall</label>
    <select id="hall" name="hall">
        <option value="" selected disabled hidden>-- Select a Hall --</option>
        <option value="hall1">Nkrumah Hall </option>
        <option value="hall2">Nsibirwa Hall</option>
        <option value="hall3">University Hall </option>
        <option value="hall4">Mitchell Hall</option>
        <option value="hall5">Complex Hall</option>
        <option value="hall6">Mary Stuart Hall</option>
        <option value="hall7">Lumumba Hall</option>
        <option value="hall8">Livingstone Hall</option>
        <option value="hall9">Africa Hall</option>
            
    </select>
    
    <label for="male">Male</label> 
    <input type="radio" name="gender" id="male">
    <label for="female">Female</label>
    <input type="radio" name="gender" id="female">
    <label for="nationality"></label>
    <input type="text" name="nationality" placeholder="Enter your nationality">
    <label for="course">Course Name</label>
    <input type="text" placeholder="Enter your Course" name="course">
    </div>
             `;
    } 
    else if (userType === "admin") {
        formContent = `
            <label for="adminID">Admin ID:</label>
            <input type="text" id="adminID" name="adminID" required>

            <label for="department">Department:</label>
            <input type="text" id="department" name="department" required>
        `;
    } 
    else if (userType === "hallleader") {
        formContent = `
            <label for="hallID">Hall Leader ID:</label>
            <input type="text" id="hallID" name="hallID" required>

            <label for="hallName">Hall Name:</label>
            <input type="text" id="hallName" name="hallName" required>
        `;
    }

    document.getElementById("dynamicForm").innerHTML = formContent;
    document.getElementById("registrationForm").style.display = "block";
}