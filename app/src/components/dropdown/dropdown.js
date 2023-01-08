import React from 'react';
import styles from './dropdown.module.css'

export const DropdownMenu = () => {
  return (
    <div>
        <select className={styles.input}>
            <option value="">Select a country</option>
            <option id="al" value="Albania">Albania</option>
            <option id="dz" value="Algeria">Algeria</option>
            <option id="ao" value="Angola">Angola</option>
            <option id="ar" value="Argentina">Argentina</option>
            <option id="am" value="Armenia">Armenia</option>
            <option id="au" value="Australia">Australia</option>
            <option id="at" value="Austria">Austria</option>
            <option id="az" value="Azerbaijan">Azerbaijan</option>
            <option id="bh" value="Bahrain">Bahrain</option>
            <option id="bd" value="Bangladesh">Bangladesh</option>
            <option id="by" value="Belarus">Belarus</option>
            <option id="be" value="Belgium">Belgium</option>
            <option id="bo" value="Bolivia">Bolivia</option>
            <option id="ba" value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
            <option id="bw" value="Botswana">Botswana</option>
            <option id="br" value="Brazil">Brazil</option>
            <option id="bg" value="Bulgaria">Bulgaria</option>
            <option id="bf" value="Burkina Faso">Burkina Faso</option>
            <option id="kh" value="Cambodia">Cambodia</option>
            <option id="cm" value="Cameroon">Cameroon</option>
            <option id="ca" value="Canada">Canada</option>
            <option id="cl" value="Chile">Chile</option>
            <option id="cn" value="China">China</option>
            <option id="co" value="Colombia">Colombia</option>
            <option id="km" value="Comoros">Comoros</option>
            <option id="cg" value="Republic of the Congo">Republic of the Congo</option>
            <option id="cd" value="Democratic Republic of the Congo">Democratic Republic of the Congo</option>
            <option id="cr" value="Costa Rica">Costa Rica</option>
            <option id="hr" value="Croatia">Croatia</option>
            <option id="cu" value="Cuba">Cuba</option>
            <option id="cy" value="Cyprus">Cyprus</option>
            <option id="cz" value="Czechia">Czechia</option>
            <option id="dk" value="Denmark">Denmark</option>
            <option id="do" value="Dominican Republic">Dominican Republic</option>
            <option id="ec" value="Ecuador">Ecuador</option>
            <option id="eg" value="Egypt">Egypt</option>
            <option id="sv" value="El Salvador">El Salvador</option>
            <option id="ee" value="Estonia">Estonia</option>
            <option id="et" value="Ethiopia">Ethiopia</option>
            <option id="fi" value="Finland">Finland</option>
            <option id="fr" value="France">France</option>
            <option id="ga" value="Gabon">Gabon</option>
            <option id="ge" value="Georgia">Georgia</option>
            <option id="de" value="Germany">Germany</option>
            <option id="gh" value="Ghana">Ghana</option>
            <option id="gr" value="Greece">Greece</option>
            <option id="gt" value="Guatemala">Guatemala</option>
            <option id="gn" value="Guinea">Guinea</option>
            <option id="hn" value="Honduras">Honduras</option>
            <option id="hu" value="Hungary">Hungary</option>
            <option id="in" value="India">India</option>
            <option id="id" value="Indonesia">Indonesia</option>
            <option id="ir" value="Iran">Iran</option>
            <option id="iq" value="Iraq">Iraq</option>
            <option id="ie" value="Ireland">Ireland</option>
            <option id="il" value="Israel">Israel</option>
            <option id="it" value="Italy">Italy</option>
            <option id="jm" value="Jamaica">Jamaica</option>
            <option id="jp" value="Japan">Japan</option>
            <option id="jo" value="Jordan">Jordan</option>
            <option id="kz" value="Kazakhstan">Kazakhstan</option>
            <option id="ke" value="Kenya">Kenya</option>
            <option id="kr" value="South Korea">South Korea</option>
            <option id="kw" value="Kuwait">Kuwait</option>
            <option id="kg" value="Kyrgyzstan">Kyrgyzstan</option>
            <option id="la" value="Laos">Laos</option>
            <option id="lv" value="Latvia">Latvia</option>
            <option id="lb" value="Lebanon">Lebanon</option>
            <option id="ls" value="Lesotho">Lesotho</option>
            <option id="lr" value="Liberia">Liberia</option>
            <option id="ly" value="Libya">Libya</option>
            <option id="lt" value="Lithuania">Lithuania</option>
            <option id="mk" value="North Macedonia">North Macedonia</option>
            <option id="mg" value="Madagascar">Madagascar</option>
            <option id="mw" value="Malawi">Malawi</option>
            <option id="my" value="Malaysia">Malaysia</option>
            <option id="ml" value="Mali">Mali</option>
            <option id="mr" value="Mauritania">Mauritania</option>
            <option id="mu" value="Mauritius">Mauritius</option>
            <option id="mx" value="Mexico">Mexico</option>
            <option id="md" value="Moldova">Moldova</option>
            <option id="mn" value="Mongolia">Mongolia</option>
            <option id="ma" value="Morocco">Morocco</option>
            <option id="mz" value="Mozambique">Mozambique</option>
            <option id="mm" value="Myanmar">Myanmar</option>
            <option id="na" value="Namibia">Namibia</option>
            <option id="nl" value="Netherlands">Netherlands</option>
            <option id="nz" value="New Zealand">New Zealand</option>
            <option id="ni" value="Nicaragua">Nicaragua</option>
            <option id="ng" value="Nigeria">Nigeria</option>
            <option id="no" value="Norway">Norway</option>
            <option id="om" value="Oman">Oman</option>
            <option id="pk" value="Pakistan">Pakistan</option>
            <option id="pa" value="Panama">Panama</option>
            <option id="pg" value="Papua New Guinea">Papua New Guinea</option>
            <option id="py" value="Paraguay">Paraguay</option>
            <option id="pe" value="Peru">Peru</option>
            <option id="ph" value="Philippines">Philippines</option>
            <option id="pl" value="Poland">Poland</option>
            <option id="pt" value="Portugal">Portugal</option>
            <option id="qa" value="Qatar">Qatar</option>
            <option id="ro" value="Romania">Romania</option>
            <option id="ru" value="Russia">Russia</option>
            <option id="sa" value="Saudi Arabia">Saudi Arabia</option>
            <option id="sn" value="Senegal">Senegal</option>
            <option id="rs" value="Serbia">Serbia</option>
            <option id="sg" value="Singapore">Singapore</option>
            <option id="sk" value="Slovakia">Slovakia</option>
            <option id="si" value="Slovenia">Slovenia</option>
            <option id="za" value="South Africa">South Africa</option>
            <option id="es" value="Spain">Spain</option>
            <option id="lk" value="Sri Lanka">Sri Lanka</option>
            <option id="sz" value="Eswatini">Swaziland</option>
            <option id="se" value="Sweden">Sweden</option>
            <option id="ch" value="Switzerland">Switzerland</option>
            <option id="sy" value="Syria">Syria</option>
            <option id="tj" value="Tajikistan">Tajikistan</option>
            <option id="tz" value="Tanzania">Tanzania</option>
            <option id="th" value="Thailand">Thailand</option>
            <option id="tg" value="Togo">Togo</option>
            <option id="tt" value="Trinidad and Tobago">Trinidad and Tobago</option>
            <option id="tn" value="Tunisia">Tunisia</option>
            <option id="tr" value="Turkey">Turkey</option>
            <option id="tm" value="Turkmenistan">Turkmenistan</option>
            <option id="ug" value="Uganda">Uganda</option>
            <option id="ua" value="Ukraine">Ukraine</option>
            <option id="ae" value="United Arab Emirates">United Arab Emirates</option>
            <option id="gb" value="United Kingdom">United Kingdom</option>
            <option id="us" value="United States of America">United States</option>
            <option id="uy" value="Uruguay">Uruguay</option>
            <option id="uz" value="Uzbekistan">Uzbekistan</option>
            <option id="ve" value="Venezuela">Venezuela</option>
            <option id="vn" value="Vietnam">Vietnam</option>
            <option id="ye" value="Yemen">Yemen</option>
            <option id="zm" value="Zambia">Zambia</option>
            <option id="zw" value="Zimbabwe">Zimbabwe</option>
        </select>
    </div>
  )
}
