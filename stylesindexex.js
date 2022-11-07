body {
    margin: 0px;
  }
  
  .main-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
  }
  
  .dark-container,
  .light-container {
    background-color: #ecbc76;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .light-container {
    background-color: #e5e5e5;
  }
  
  .image-1 {
    width: 269px;
    height: 256px;
  }
  
  .image-2 {
    width: 450px;
    height: 450px;
    margin-left: 70px;
  }
  
  .card-container {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
  }
  
  .login-card {
    width: 500px;
    min-height: 700px;
    max-height: 700px;
    margin-top: 60px;
    background-color: white;
    box-shadow: 0px 4px 35px rgba(0, 0, 0, 0.08);
    border-radius: 40px;
    padding-left: 44px;
    padding-right: 34px;
  }
  
  .row-1 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 0px;
  }
  
  .row-1-text-1 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    color: #000000;
  }
  
  .row-1-text-2,
  .row-1-text-3 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  
    color: #8d8d8d;
  }
  
  .row-1-text-3 {
    color: #b87514;
  }
  
  .row-2 {
    font-weight: 500;
    font-size: 55px;
    margin-top: 0px;
    margin-bottom: 20px;
  }
  
  .input-row {
    width: 100%;
    margin-bottom: 10px;
  }
  
  .input-row-label {
    font-size: 16px;
  }
  
  .input-row-input {
    background: #ffffff;
    border: 1px solid #adadad;
    border-radius: 9px;
    width: 100%;
    height: 57px;
    margin-top: 10px;
    padding-left: 13px;
    font-size: 16px;
  }
  
  .login-button {
    width: 100%;
    height: 54px;
    background: #e48700;
    box-shadow: 0px 4px 19px rgba(119, 147, 65, 0.3);
    border: none;
    cursor: pointer;
    border-radius: 10px;
  }
  
  .or-text {
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 16px;
    color: #ababab;
  }
  
  .social-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  
  .login-img-1 {
    width: 298px;
    height: 55px;
  }
  .login-img-2 {
    height: 55px;
  }
  .login-img-3 {
    height: 55px;
  }
  
  .pass-eye {
    position: absolute;
    width: 22px;
    height: 19px;
    margin-left: -35px;
    margin-top: 28px;
    cursor: pointer;
  }
  
  @media screen and (max-width: 992px) {
    .light-container {
      display: none;
    }
  }
  
  @media screen and (max-width: 676px) {
    .login-card {
      width: auto;
    }
  }
  