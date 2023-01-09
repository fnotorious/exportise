import React from 'react';
import styles from './dropdown.module.css'

export const DropdownMenu = ({ onChange }) => {
  return (
    <div>
        <select onChange={onChange} className={styles.input}>
            <option value="none" itemText="">Select a country</option>
            <option value="al" itemText="Albania">Albania</option>
            <option value="dz" itemText="Algeria">Algeria</option>
            <option value="ao" itemText="Angola">Angola</option>
            <option value="ar" itemText="Argentina">Argentina</option>
            <option value="am" itemText="Armenia">Armenia</option>
            <option value="au" itemText="Australia">Australia</option>
            <option value="at" itemText="Austria">Austria</option>
            <option value="az" itemText="Azerbaijan">Azerbaijan</option>
            <option value="bh" itemText="Bahrain">Bahrain</option>
            <option value="bd" itemText="Bangladesh">Bangladesh</option>
            <option value="by" itemText="Belarus">Belarus</option>
            <option value="be" itemText="Belgium">Belgium</option>
            <option value="bo" itemText="Bolivia">Bolivia</option>
            <option value="ba" itemText="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
            <option value="bw" itemText="Botswana">Botswana</option>
            <option value="br" itemText="Brazil">Brazil</option>
            <option value="bg" itemText="Bulgaria">Bulgaria</option>
            <option value="bf" itemText="Burkina Faso">Burkina Faso</option>
            <option value="kh" itemText="Cambodia">Cambodia</option>
            <option value="cm" itemText="Cameroon">Cameroon</option>
            <option value="ca" itemText="Canada">Canada</option>
            <option value="cl" itemText="Chile">Chile</option>
            <option value="cn" itemText="China">China</option>
            <option value="co" itemText="Colombia">Colombia</option>
            <option value="km" itemText="Comoros">Comoros</option>
            <option value="cg" itemText="Republic of the Congo">Republic of the Congo</option>
            <option value="cd" itemText="Democratic Republic of the Congo">Democratic Republic of the Congo</option>
            <option value="cr" itemText="Costa Rica">Costa Rica</option>
            <option value="hr" itemText="Croatia">Croatia</option>
            <option value="cu" itemText="Cuba">Cuba</option>
            <option value="cy" itemText="Cyprus">Cyprus</option>
            <option value="cz" itemText="Czechia">Czechia</option>
            <option value="dk" itemText="Denmark">Denmark</option>
            <option value="do" itemText="Dominican Republic">Dominican Republic</option>
            <option value="ec" itemText="Ecuador">Ecuador</option>
            <option value="eg" itemText="Egypt">Egypt</option>
            <option value="sv" itemText="El Salvador">El Salvador</option>
            <option value="ee" itemText="Estonia">Estonia</option>
            <option value="et" itemText="Ethiopia">Ethiopia</option>
            <option value="fi" itemText="Finland">Finland</option>
            <option value="fr" itemText="France">France</option>
            <option value="ga" itemText="Gabon">Gabon</option>
            <option value="ge" itemText="Georgia">Georgia</option>
            <option value="de" itemText="Germany">Germany</option>
            <option value="gh" itemText="Ghana">Ghana</option>
            <option value="gr" itemText="Greece">Greece</option>
            <option value="gt" itemText="Guatemala">Guatemala</option>
            <option value="gn" itemText="Guinea">Guinea</option>
            <option value="hn" itemText="Honduras">Honduras</option>
            <option value="hu" itemText="Hungary">Hungary</option>
            <option value="in" itemText="India">India</option>
            <option value="id" itemText="Indonesia">Indonesia</option>
            <option value="ir" itemText="Iran">Iran</option>
            <option value="iq" itemText="Iraq">Iraq</option>
            <option value="ie" itemText="Ireland">Ireland</option>
            <option value="il" itemText="Israel">Israel</option>
            <option value="it" itemText="Italy">Italy</option>
            <option value="jm" itemText="Jamaica">Jamaica</option>
            <option value="jp" itemText="Japan">Japan</option>
            <option value="jo" itemText="Jordan">Jordan</option>
            <option value="kz" itemText="Kazakhstan">Kazakhstan</option>
            <option value="ke" itemText="Kenya">Kenya</option>
            <option value="kr" itemText="South Korea">South Korea</option>
            <option value="kw" itemText="Kuwait">Kuwait</option>
            <option value="kg" itemText="Kyrgyzstan">Kyrgyzstan</option>
            <option value="la" itemText="Laos">Laos</option>
            <option value="lv" itemText="Latvia">Latvia</option>
            <option value="lb" itemText="Lebanon">Lebanon</option>
            <option value="ls" itemText="Lesotho">Lesotho</option>
            <option value="lr" itemText="Liberia">Liberia</option>
            <option value="ly" itemText="Libya">Libya</option>
            <option value="lt" itemText="Lithuania">Lithuania</option>
            <option value="mk" itemText="North Macedonia">North Macedonia</option>
            <option value="mg" itemText="Madagascar">Madagascar</option>
            <option value="mw" itemText="Malawi">Malawi</option>
            <option value="my" itemText="Malaysia">Malaysia</option>
            <option value="ml" itemText="Mali">Mali</option>
            <option value="mr" itemText="Mauritania">Mauritania</option>
            <option value="mu" itemText="Mauritius">Mauritius</option>
            <option value="mx" itemText="Mexico">Mexico</option>
            <option value="md" itemText="Moldova">Moldova</option>
            <option value="mn" itemText="Mongolia">Mongolia</option>
            <option value="ma" itemText="Morocco">Morocco</option>
            <option value="mz" itemText="Mozambique">Mozambique</option>
            <option value="mm" itemText="Myanmar">Myanmar</option>
            <option value="na" itemText="Namibia">Namibia</option>
            <option value="nl" itemText="Netherlands">Netherlands</option>
            <option value="nz" itemText="New Zealand">New Zealand</option>
            <option value="ni" itemText="Nicaragua">Nicaragua</option>
            <option value="ng" itemText="Nigeria">Nigeria</option>
            <option value="no" itemText="Norway">Norway</option>
            <option value="om" itemText="Oman">Oman</option>
            <option value="pk" itemText="Pakistan">Pakistan</option>
            <option value="pa" itemText="Panama">Panama</option>
            <option value="pg" itemText="Papua New Guinea">Papua New Guinea</option>
            <option value="py" itemText="Paraguay">Paraguay</option>
            <option value="pe" itemText="Peru">Peru</option>
            <option value="ph" itemText="Philippines">Philippines</option>
            <option value="pl" itemText="Poland">Poland</option>
            <option value="pt" itemText="Portugal">Portugal</option>
            <option value="qa" itemText="Qatar">Qatar</option>
            <option value="ro" itemText="Romania">Romania</option>
            <option value="ru" itemText="Russia">Russia</option>
            <option value="sa" itemText="Saudi Arabia">Saudi Arabia</option>
            <option value="sn" itemText="Senegal">Senegal</option>
            <option value="rs" itemText="Serbia">Serbia</option>
            <option value="sg" itemText="Singapore">Singapore</option>
            <option value="sk" itemText="Slovakia">Slovakia</option>
            <option value="si" itemText="Slovenia">Slovenia</option>
            <option value="za" itemText="South Africa">South Africa</option>
            <option value="es" itemText="Spain">Spain</option>
            <option value="lk" itemText="Sri Lanka">Sri Lanka</option>
            <option value="sz" itemText="Eswatini">Swaziland</option>
            <option value="se" itemText="Sweden">Sweden</option>
            <option value="ch" itemText="Switzerland">Switzerland</option>
            <option value="sy" itemText="Syria">Syria</option>
            <option value="tj" itemText="Tajikistan">Tajikistan</option>
            <option value="tz" itemText="Tanzania">Tanzania</option>
            <option value="th" itemText="Thailand">Thailand</option>
            <option value="tg" itemText="Togo">Togo</option>
            <option value="tt" itemText="Trinvaluead and Tobago">Trinvaluead and Tobago</option>
            <option value="tn" itemText="Tunisia">Tunisia</option>
            <option value="tr" itemText="Turkey">Turkey</option>
            <option value="tm" itemText="Turkmenistan">Turkmenistan</option>
            <option value="ug" itemText="Uganda">Uganda</option>
            <option value="ua" itemText="Ukraine">Ukraine</option>
            <option value="ae" itemText="United Arab Emirates">United Arab Emirates</option>
            <option value="gb" itemText="United Kingdom">United Kingdom</option>
            <option value="us" itemText="United States of America">United States</option>
            <option value="uy" itemText="Uruguay">Uruguay</option>
            <option value="uz" itemText="Uzbekistan">Uzbekistan</option>
            <option value="ve" itemText="Venezuela">Venezuela</option>
            <option value="vn" itemText="Vietnam">Vietnam</option>
            <option value="ye" itemText="Yemen">Yemen</option>
            <option value="zm" itemText="Zambia">Zambia</option>
            <option value="zw" itemText="Zimbabwe">Zimbabwe</option>
        </select>
    </div>
  )
}
