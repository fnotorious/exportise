import React from 'react';
import styles from './dropdown.module.css'

export const DropdownMenu = ({ darkMode, onChange, size }) => {
  return (
    <div>
        <select onChange={onChange} className={`${styles.input} ${size === "long" ? styles.inputLong : styles.inputShort} ${darkMode ? styles.darkInput : ''}`}>
            <option value="none" id="">Select a country</option>
            <option value="al" id="Albania">Albania</option>
            <option value="dz" id="Algeria">Algeria</option>
            <option value="ao" id="Angola">Angola</option>
            <option value="ar" id="Argentina">Argentina</option>
            <option value="am" id="Armenia">Armenia</option>
            <option value="au" id="Australia">Australia</option>
            <option value="at" id="Austria">Austria</option>
            <option value="az" id="Azerbaijan">Azerbaijan</option>
            <option value="bh" id="Bahrain">Bahrain</option>
            <option value="bd" id="Bangladesh">Bangladesh</option>
            <option value="by" id="Belarus">Belarus</option>
            <option value="be" id="Belgium">Belgium</option>
            <option value="bo" id="Bolivia">Bolivia</option>
            <option value="ba" id="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
            <option value="bw" id="Botswana">Botswana</option>
            <option value="br" id="Brazil">Brazil</option>
            <option value="bg" id="Bulgaria">Bulgaria</option>
            <option value="bf" id="Burkina Faso">Burkina Faso</option>
            <option value="kh" id="Cambodia">Cambodia</option>
            <option value="cm" id="Cameroon">Cameroon</option>
            <option value="ca" id="Canada">Canada</option>
            <option value="cl" id="Chile">Chile</option>
            <option value="cn" id="China">China</option>
            <option value="co" id="Colombia">Colombia</option>
            <option value="km" id="Comoros">Comoros</option>
            <option value="cg" id="Republic of the Congo">Republic of the Congo</option>
            <option value="cd" id="Democratic Republic of the Congo">Democratic Republic of the Congo</option>
            <option value="cr" id="Costa Rica">Costa Rica</option>
            <option value="hr" id="Croatia">Croatia</option>
            <option value="cu" id="Cuba">Cuba</option>
            <option value="cy" id="Cyprus">Cyprus</option>
            <option value="cz" id="Czechia">Czechia</option>
            <option value="dk" id="Denmark">Denmark</option>
            <option value="do" id="Dominican Republic">Dominican Republic</option>
            <option value="ec" id="Ecuador">Ecuador</option>
            <option value="eg" id="Egypt">Egypt</option>
            <option value="sv" id="El Salvador">El Salvador</option>
            <option value="ee" id="Estonia">Estonia</option>
            <option value="et" id="Ethiopia">Ethiopia</option>
            <option value="fi" id="Finland">Finland</option>
            <option value="fr" id="France">France</option>
            <option value="ga" id="Gabon">Gabon</option>
            <option value="ge" id="Georgia">Georgia</option>
            <option value="de" id="Germany">Germany</option>
            <option value="gh" id="Ghana">Ghana</option>
            <option value="gr" id="Greece">Greece</option>
            <option value="gt" id="Guatemala">Guatemala</option>
            <option value="gn" id="Guinea">Guinea</option>
            <option value="hn" id="Honduras">Honduras</option>
            <option value="hu" id="Hungary">Hungary</option>
            <option value="is" id="Iceland">Iceland</option>
            <option value="in" id="India">India</option>
            <option value="id" id="Indonesia">Indonesia</option>
            <option value="ir" id="Iran">Iran</option>
            <option value="iq" id="Iraq">Iraq</option>
            <option value="ie" id="Ireland">Ireland</option>
            <option value="il" id="Israel">Israel</option>
            <option value="it" id="Italy">Italy</option>
            <option value="jm" id="Jamaica">Jamaica</option>
            <option value="jp" id="Japan">Japan</option>
            <option value="jo" id="Jordan">Jordan</option>
            <option value="kz" id="Kazakhstan">Kazakhstan</option>
            <option value="ke" id="Kenya">Kenya</option>
            <option value="kr" id="South Korea">South Korea</option>
            <option value="kw" id="Kuwait">Kuwait</option>
            <option value="kg" id="Kyrgyzstan">Kyrgyzstan</option>
            <option value="la" id="Laos">Laos</option>
            <option value="lv" id="Latvia">Latvia</option>
            <option value="lb" id="Lebanon">Lebanon</option>
            <option value="ls" id="Lesotho">Lesotho</option>
            <option value="lr" id="Liberia">Liberia</option>
            <option value="ly" id="Libya">Libya</option>
            <option value="lt" id="Lithuania">Lithuania</option>
            <option value="mk" id="North Macedonia">North Macedonia</option>
            <option value="mg" id="Madagascar">Madagascar</option>
            <option value="mw" id="Malawi">Malawi</option>
            <option value="my" id="Malaysia">Malaysia</option>
            <option value="ml" id="Mali">Mali</option>
            <option value="mr" id="Mauritania">Mauritania</option>
            <option value="mu" id="Mauritius">Mauritius</option>
            <option value="mx" id="Mexico">Mexico</option>
            <option value="md" id="Moldova">Moldova</option>
            <option value="mn" id="Mongolia">Mongolia</option>
            <option value="ma" id="Morocco">Morocco</option>
            <option value="mz" id="Mozambique">Mozambique</option>
            <option value="mm" id="Myanmar">Myanmar</option>
            <option value="na" id="Namibia">Namibia</option>
            <option value="np" id="Nepal">Nepal</option>
            <option value="nl" id="Netherlands">Netherlands</option>
            <option value="nz" id="New Zealand">New Zealand</option>
            <option value="ni" id="Nicaragua">Nicaragua</option>
            <option value="ng" id="Nigeria">Nigeria</option>
            <option value="no" id="Norway">Norway</option>
            <option value="om" id="Oman">Oman</option>
            <option value="pk" id="Pakistan">Pakistan</option>
            <option value="ps" id="Palestine">Palestine</option>
            <option value="pa" id="Panama">Panama</option>
            <option value="pg" id="Papua New Guinea">Papua New Guinea</option>
            <option value="py" id="Paraguay">Paraguay</option>
            <option value="pe" id="Peru">Peru</option>
            <option value="ph" id="Philippines">Philippines</option>
            <option value="pl" id="Poland">Poland</option>
            <option value="pt" id="Portugal">Portugal</option>
            <option value="qa" id="Qatar">Qatar</option>
            <option value="ro" id="Romania">Romania</option>
            <option value="ru" id="Russia">Russia</option>
            <option value="sa" id="Saudi Arabia">Saudi Arabia</option>
            <option value="sn" id="Senegal">Senegal</option>
            <option value="rs" id="Serbia">Serbia</option>
            <option value="sg" id="Singapore">Singapore</option>
            <option value="sk" id="Slovakia">Slovakia</option>
            <option value="si" id="Slovenia">Slovenia</option>
            <option value="za" id="South Africa">South Africa</option>
            <option value="es" id="Spain">Spain</option>
            <option value="lk" id="Sri Lanka">Sri Lanka</option>
            <option value="sd" id="Sudan">Sudan</option>
            <option value="sz" id="Eswatini">Swaziland</option>
            <option value="se" id="Sweden">Sweden</option>
            <option value="ch" id="Switzerland">Switzerland</option>
            <option value="sy" id="Syria">Syria</option>
            <option value="tj" id="Tajikistan">Tajikistan</option>
            <option value="tz" id="Tanzania">Tanzania</option>
            <option value="th" id="Thailand">Thailand</option>
            <option value="tg" id="Togo">Togo</option>
            <option value="tt" id="Trinidad and Tobago">Trinidad and Tobago</option>
            <option value="tn" id="Tunisia">Tunisia</option>
            <option value="tr" id="Turkey">Turkey</option>
            <option value="tm" id="Turkmenistan">Turkmenistan</option>
            <option value="ug" id="Uganda">Uganda</option>
            <option value="ua" id="Ukraine">Ukraine</option>
            <option value="ae" id="United Arab Emirates">United Arab Emirates</option>
            <option value="gb" id="United Kingdom">United Kingdom</option>
            <option value="us" id="United States of America">United States</option>
            <option value="uy" id="Uruguay">Uruguay</option>
            <option value="uz" id="Uzbekistan">Uzbekistan</option>
            <option value="ve" id="Venezuela">Venezuela</option>
            <option value="vn" id="Vietnam">Vietnam</option>
            <option value="ye" id="Yemen">Yemen</option>
            <option value="zm" id="Zambia">Zambia</option>
            <option value="zw" id="Zimbabwe">Zimbabwe</option>
        </select>
    </div>
  )
}
