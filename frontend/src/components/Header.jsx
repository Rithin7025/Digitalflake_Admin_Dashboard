import React from "react";
import LogoutButton from "./Logoutbutton";

function Header() {
  return (
    // <div>
    <div className="w-full h-12 bg-[#662671] absolute flex items-center justify-between top-0 left-0 gap-1 px-5 ">
      <div className="flex items-center justify-center gap-2">
        <svg
          width="22"
          height="46"
          viewBox="0 0 45 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M38.9968 45.362H5.77227C2.5897 45.362 0 42.7723 0 39.5897V6.36588C0 3.1826 2.5897 0.592896 5.77227 0.592896H38.9968C42.1794 0.592896 44.7691 3.1826 44.7691 6.36588V39.589C44.7691 42.7723 42.1794 45.362 38.9968 45.362ZM5.77227 2.14024C3.44261 2.14024 1.54734 4.03551 1.54734 6.36588V39.589C1.54734 41.9194 3.44261 43.8147 5.77227 43.8147H38.9968C41.3265 43.8147 43.2218 41.9194 43.2218 39.589V6.36588C43.2218 4.03551 41.3265 2.14024 38.9968 2.14024H5.77227Z"
            fill="white"
          />
          <path
            d="M33.7375 14.7495C32.3731 12.3665 30.4397 10.5382 27.9371 9.26392C27.023 8.79856 26.0526 8.41893 25.0283 8.12358V12.7202C26.0073 13.1993 26.8645 13.8231 27.6 14.5917C29.5486 16.6304 30.5225 19.4628 30.5225 23.0898C30.5225 26.6866 29.5486 29.4744 27.6 31.4525C26.8645 32.1988 26.0073 32.8047 25.0283 33.2693V37.8494C26.0526 37.5612 27.0223 37.1902 27.9371 36.7357C30.4397 35.4923 32.3731 33.7008 33.7375 31.3625C35.1011 29.0242 35.7833 26.2666 35.7833 23.0891C35.7833 19.9138 35.1011 17.1332 33.7375 14.7495ZM10.2414 7.35352C9.54841 7.35352 8.98581 7.91324 8.98581 8.60335V38.6021H19.1919C19.3778 38.6021 19.5615 38.5993 19.7444 38.5957V34.4111C19.5622 34.4161 19.3785 34.4204 19.1919 34.4204H14.1112V11.5345H19.1919C19.3785 11.5345 19.5622 11.5388 19.7444 11.5446V7.36C19.5615 7.35568 19.3778 7.35352 19.1919 7.35352H10.2414Z"
            fill="white"
          />
        </svg>
        <svg
          width="98"
          height="38"
          viewBox="0 0 242 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.46506 15.4778C2.43611 13.594 3.76157 12.1454 5.4429 11.1304C7.12351 10.1161 8.99285 9.60896 11.0516 9.60896C12.617 9.60896 14.1096 9.94969 15.5294 10.6304C16.9493 11.3119 18.0802 12.2174 18.9209 13.3476V1.9126H25.0944V34.0862H18.9209V30.5211C18.1667 31.7097 17.1092 32.6663 15.747 33.3903C14.384 34.1143 12.805 34.4773 11.0077 34.4773C8.97844 34.4773 7.12351 33.9558 5.4429 32.9127C3.76157 31.8689 2.43539 30.3986 1.46506 28.4998C0.49329 26.6016 0.00848389 24.4203 0.00848389 21.9567C0.00848389 19.5211 0.49329 17.3622 1.46506 15.4778ZM18.0954 18.2382C17.5155 17.1807 16.7324 16.3688 15.7477 15.8041C14.7615 15.2386 13.704 14.9562 12.5738 14.9562C11.4435 14.9562 10.3997 15.2321 9.4438 15.7825C8.48715 16.3335 7.71133 17.1375 7.11775 18.1957C6.52345 19.2539 6.22666 20.5073 6.22666 21.9567C6.22666 23.4061 6.52345 24.6739 7.11775 25.7609C7.71133 26.848 8.49436 27.6814 9.46541 28.2613C10.4365 28.8412 11.4723 29.1308 12.5738 29.1308C13.704 29.1308 14.7622 28.8477 15.7477 28.2829C16.7324 27.7174 17.5155 26.9063 18.0954 25.8481C18.6752 24.7899 18.9648 23.522 18.9648 22.0439C18.9648 20.5657 18.6745 19.2971 18.0954 18.2382Z"
            fill="white"
          />
          <path
            d="M31.4639 6.10796C30.7536 5.42721 30.3984 4.57935 30.3984 3.56436C30.3984 2.55008 30.7529 1.70294 31.4639 1.02075C32.1734 0.340732 33.0652 0 34.1378 0C35.2097 0 36.1008 0.340732 36.8118 1.02147C37.5214 1.70294 37.8772 2.5508 37.8772 3.56508C37.8772 4.58007 37.5221 5.42793 36.8118 6.10868C36.1008 6.79014 35.2097 7.13015 34.1378 7.13015C33.0652 7.13015 32.1734 6.78942 31.4639 6.10796ZM37.1381 9.99936V34.0861H31.0511V9.99936H37.1381Z"
            fill="white"
          />
          <path
            d="M57.3112 10.6736C58.6734 11.3839 59.7453 12.3038 60.5283 13.4348V10.0001H66.6586V34.2605C66.6586 36.4921 66.2084 38.4847 65.3108 40.2388C64.4118 41.9921 63.064 43.3839 61.2674 44.4125C59.4694 45.4412 57.2961 45.9563 54.746 45.9563C51.325 45.9563 48.5213 45.1588 46.3329 43.5647C44.1437 41.9705 42.9047 39.7965 42.6158 37.0432H48.6589C48.9773 38.1447 49.6653 39.0213 50.7242 39.6733C51.7817 40.3259 53.0647 40.6515 54.5717 40.6515C56.3394 40.6515 57.7744 40.1221 58.8758 39.0646C59.9773 38.0063 60.5276 36.405 60.5276 34.2605V30.5218C59.7453 31.652 58.6655 32.5943 57.2889 33.3478C55.9115 34.1013 54.339 34.478 52.5712 34.478C50.5419 34.478 48.687 33.9565 47.0064 32.9134C45.3251 31.8696 43.9989 30.3993 43.0286 28.5004C42.0568 26.6023 41.572 24.421 41.572 21.9574C41.572 19.5226 42.0568 17.3636 43.0286 15.4792C43.9996 13.5954 45.3179 12.1468 46.9848 11.1318C48.651 10.1175 50.5131 9.61036 52.5712 9.61036C54.3692 9.6082 55.9483 9.96406 57.3112 10.6736ZM59.6589 18.2381C59.079 17.1807 58.2959 16.3688 57.3112 15.804C56.325 15.2386 55.2675 14.9562 54.1373 14.9562C53.007 14.9562 51.9632 15.2321 51.0073 15.7824C50.0507 16.3335 49.2748 17.1374 48.6813 18.1956C48.087 19.2539 47.7902 20.5073 47.7902 21.9567C47.7902 23.406 48.087 24.6739 48.6813 25.7609C49.2748 26.8479 50.0579 27.6814 51.0289 28.2613C52 28.8412 53.0359 29.1308 54.1373 29.1308C55.2675 29.1308 56.3257 28.8477 57.3112 28.2829C58.2959 27.7174 59.079 26.9063 59.6589 25.8481C60.2388 24.7899 60.5283 23.522 60.5283 22.0438C60.5283 20.5656 60.2388 19.2971 59.6589 18.2381Z"
            fill="white"
          />
          <path
            d="M73.0281 6.10796C72.3178 5.42721 71.9626 4.57935 71.9626 3.56436C71.9626 2.55008 72.3171 1.70294 73.0281 1.02075C73.7376 0.340732 74.6287 0 75.702 0C76.7739 0 77.665 0.340732 78.376 1.02147C79.0856 1.70294 79.4415 2.5508 79.4415 3.56508C79.4415 4.58007 79.0863 5.42793 78.376 6.10868C77.665 6.79014 76.7739 7.13015 75.702 7.13015C74.6287 7.13015 73.7376 6.78942 73.0281 6.10796ZM78.7016 9.99936V34.0861H72.6146V9.99936H78.7016Z"
            fill="white"
          />
          <path
            d="M91.7885 14.9995V26.6513C91.7885 27.4632 91.9837 28.0503 92.3749 28.4119C92.766 28.775 93.4251 28.955 94.353 28.955H97.179V34.0855H93.3524C88.222 34.0855 85.6567 31.593 85.6567 26.6074V14.9995H82.7875V9.99942H85.6567V4.04346H91.787V10.0001H97.1782V15.0002L91.7885 14.9995Z"
            fill="white"
          />
          <path
            d="M101.462 15.4777C102.433 13.5939 103.751 12.1453 105.418 11.1303C107.084 10.116 108.946 9.60889 111.004 9.60889C112.801 9.60889 114.374 9.97123 115.722 10.6959C117.07 11.4206 118.149 12.3333 118.961 13.4347V10H125.091V34.0868H118.961V30.565C118.178 31.6952 117.098 32.6302 115.722 33.3693C114.344 34.1084 112.758 34.478 110.961 34.478C108.932 34.478 107.084 33.9564 105.418 32.9133C103.751 31.8695 102.432 30.3993 101.462 28.5004C100.49 26.6022 100.005 24.421 100.005 21.9573C100.005 19.5211 100.49 17.3622 101.462 15.4777ZM118.091 18.2381C117.511 17.1806 116.728 16.3688 115.743 15.804C114.757 15.2385 113.7 14.9561 112.57 14.9561C111.439 14.9561 110.395 15.232 109.44 15.7824C108.483 16.3335 107.707 17.1374 107.113 18.1956C106.519 19.2538 106.222 20.5073 106.222 21.9566C106.222 23.406 106.519 24.6738 107.113 25.7609C107.707 26.8479 108.49 27.6814 109.461 28.2612C110.432 28.8411 111.468 29.1307 112.57 29.1307C113.7 29.1307 114.758 28.8476 115.743 28.2829C116.728 27.7174 117.511 26.9062 118.091 25.848C118.671 24.7898 118.961 23.522 118.961 22.0438C118.961 20.5656 118.671 19.297 118.091 18.2381Z"
            fill="white"
          />
          <path
            d="M137.135 1.9126V34.0862H131.048V1.9126H137.135Z"
            fill="white"
          />
          <path
            d="M153.177 13.5212H148.178V34.0862H144.221V13.5212H141.134V10.2609H144.221V8.56514C144.221 5.89908 144.909 3.94978 146.286 2.71724C147.663 1.48542 149.873 0.869507 152.916 0.869507V4.17381C151.177 4.17381 149.953 4.51454 149.242 5.19529C148.532 5.87675 148.177 6.99908 148.177 8.56442V10.2602H153.176V13.5212H153.177Z"
            fill="white"
          />
          <path
            d="M161.742 1.9126V34.0862H157.786V1.9126H161.742Z"
            fill="white"
          />
          <path
            d="M168.48 15.6737C169.465 13.8332 170.821 12.4061 172.545 11.3912C174.27 10.3769 176.191 9.86975 178.306 9.86975C180.393 9.86975 182.204 10.32 183.741 11.2175C185.277 12.1166 186.422 13.2468 187.176 14.609V10.2616H191.176V34.0869H187.176V29.6524C186.394 31.0441 185.227 32.196 183.677 33.1087C182.126 34.0221 180.322 34.4781 178.264 34.4781C176.147 34.4781 174.234 33.9565 172.525 32.9134C170.814 31.8696 169.466 30.4066 168.481 28.5221C167.496 26.6384 167.003 24.4938 167.003 22.0878C167.002 19.6516 167.495 17.5142 168.48 15.6737ZM186.089 17.4343C185.364 16.1009 184.386 15.0794 183.154 14.3691C181.922 13.6589 180.567 13.3037 179.089 13.3037C177.611 13.3037 176.263 13.6517 175.046 14.3475C173.829 15.0427 172.857 16.0584 172.133 17.3911C171.408 18.7245 171.046 20.2898 171.046 22.0871C171.046 23.9132 171.408 25.5002 172.133 26.848C172.857 28.1958 173.828 29.2245 175.046 29.9347C176.263 30.645 177.612 31.0002 179.089 31.0002C180.567 31.0002 181.922 30.6457 183.154 29.9347C184.386 29.2245 185.364 28.1951 186.089 26.848C186.814 25.5002 187.176 23.9284 187.176 22.1303C187.175 20.333 186.813 18.7677 186.089 17.4343Z"
            fill="white"
          />
          <path
            d="M211.176 34.0862L201.828 23.5645V34.0862H197.871V1.9126H201.828V20.8257L211.001 10.2609H216.522L205.305 22.1296L216.566 34.0862H211.176Z"
            fill="white"
          />
          <path
            d="M241.87 23.6517H222.826C222.971 25.9994 223.775 27.8334 225.239 29.1517C226.702 30.4707 228.479 31.1298 230.566 31.1298C232.276 31.1298 233.703 30.7314 234.848 29.934C235.993 29.1373 236.797 28.0719 237.261 26.7385H241.522C240.884 29.0285 239.609 30.8906 237.696 32.3249C235.783 33.7591 233.406 34.4766 230.566 34.4766C228.304 34.4766 226.284 33.9702 224.501 32.9552C222.718 31.9409 221.319 30.4988 220.306 28.6294C219.291 26.7601 218.784 24.5932 218.784 22.1296C218.784 19.6667 219.277 17.507 220.262 15.6514C221.247 13.7964 222.632 12.3687 224.415 11.3688C226.197 10.3689 228.247 9.86829 230.566 9.86829C232.828 9.86829 234.827 10.3617 236.566 11.3465C238.305 12.3319 239.645 13.6876 240.588 15.4115C241.53 17.1367 242.001 19.0853 242.001 21.2594C242 22.0143 241.957 22.811 241.87 23.6517ZM236.913 16.5432C236.246 15.4561 235.34 14.6299 234.196 14.0651C233.051 13.4996 231.783 13.2173 230.392 13.2173C228.392 13.2173 226.689 13.8548 225.283 15.1305C223.877 16.4063 223.073 18.1741 222.87 20.4346H237.913C237.913 18.9276 237.58 17.6302 236.913 16.5432Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="">
      
      </div>

         <div className="flex ">
           <LogoutButton />
         </div>
    </div>
    // </div>
  );
}

export default Header;
