import { MenuButton } from "@chakra-ui/react";
import React from "react";
import style from  "./header.module.css";

export default function Header() {
  return (
    <div className={style.landingHeader}>
      <div className={style.jobBanner}>
        <a href="/jobs/">
          <p
            
            style={{
              fontWeight: "bold",
              textAlign: "center",
              paddingTop: "1%",
            }}
          >
            Lose It! is hiring! Click here to see our open positions.
          </p>
        </a>
      </div>
      <div className={style.headerOne}>
        <div
          
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div style={{ marginLeft: "-6%" }}>
            <a href="/">
              <img
                src="https://assets.loseit.com/website/corporate/LoseIt_Logo_FullColor+(1).svg"
                alt="Lose It! logo"
                style={{ width: "59%" }}
              ></img>
            </a>
          </div>
          <div  style={{ marginTop: "2%" }}>
            <button
              className={style.loginButton}
              
            >
              Login
            </button>
          </div>
        </div>
      </div>
      <div className={style.headerTwo}>
        <div className={style.hdFlex}>
          <div className={style.h2One}>
            <img
              src="	https://assets.loseit.com/website/home/Screenshot_LogScreenFixed.png"
              alt="phone"
            ></img>
          </div>
          <div className={style.h2Two}>
            <h1>Top Rated</h1>
            <h1>Weight Loss Plan</h1>
            <p>Track the foods you love and lose weight</p>
            <button>Sign Up for Free</button>
            <div className="h2-2-flex" style={{ display: "flex" }}>
              <div className={style.apple} >
              <i class="fab fa-apple"></i>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
              </div>
              <div className={style.android}>
              <a href="/get/android" aria-label="Download Lose It! app from Play Store">
                        <i class="fab fa-android"></i>
                        <i class="checked fa fa-star"></i>
                        <i class="checked fa fa-star"></i>
                        <i class="checked fa fa-star"></i>
                        <i class="checked fa fa-star"></i>
                        <i class="star fa fa-star android"></i>
                    </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}