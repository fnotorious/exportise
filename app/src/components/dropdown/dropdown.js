import React from 'react';
import styles from './dropdown.module.css'

export const DropdownMenu = ({ darkMode, onChange }) => {
  return (
    <div>
        <select onChange={onChange} className={`${styles.input} ${darkMode ? styles.darkInput : ''}`}>
            <option value="none" id="">Select a country</option>
            <option value="albania" id="Albania">Albania</option>
            <option value="algeria" id="Algeria">Algeria</option>
            <option value="angola" id="Angola">Angola</option>
            <option value="argentina" id="Argentina">Argentina</option>
            <option value="armenia" id="Armenia">Armenia</option>
            <option value="australia" id="Australia">Australia</option>
            <option value="austria" id="Austria">Austria</option>
            <option value="azerbaijan" id="Azerbaijan">Azerbaijan</option>
            <option value="bahrain" id="Bahrain">Bahrain</option>
            <option value="bangladesh" id="Bangladesh">Bangladesh</option>
            <option value="belarus" id="Belarus">Belarus</option>
            <option value="belgium" id="Belgium">Belgium</option>
            <option value="bolivia" id="Bolivia">Bolivia</option>
            <option value="bosnia-and-herzegovina" id="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
            <option value="botswana" id="Botswana">Botswana</option>
            <option value="brazil" id="Brazil">Brazil</option>
            <option value="bulgaria" id="Bulgaria">Bulgaria</option>
            <option value="burkina-faso" id="Burkina Faso">Burkina Faso</option>
            <option value="cambodia" id="Cambodia">Cambodia</option>
            <option value="cameroon" id="Cameroon">Cameroon</option>
            <option value="canada" id="Canada">Canada</option>
            <option value="chile" id="Chile">Chile</option>
            <option value="china" id="China">China</option>
            <option value="colombia" id="Colombia">Colombia</option>
            <option value="comoros" id="Comoros">Comoros</option>
            <option value="republic-of-the-congo" id="Republic of the Congo">Republic of the Congo</option>
            <option value="democratic-republic-of-congo" id="Democratic Republic of the Congo">Democratic Republic of the Congo</option>
            <option value="costa-rica" id="Costa Rica">Costa Rica</option>
            <option value="croatia" id="Croatia">Croatia</option>
            <option value="cuba" id="Cuba">Cuba</option>
            <option value="cyprus" id="Cyprus">Cyprus</option>
            <option value="czech-republic" id="Czechia">Czechia</option>
            <option value="denmark" id="Denmark">Denmark</option>
            <option value="dominican-republic" id="Dominican Republic">Dominican Republic</option>
            <option value="ecuador" id="Ecuador">Ecuador</option>
            <option value="egypt" id="Egypt">Egypt</option>
            <option value="el-salvador" id="El Salvador">El Salvador</option>
            <option value="estonia" id="Estonia">Estonia</option>
            <option value="ethiopia" id="Ethiopia">Ethiopia</option>
            <option value="finland" id="Finland">Finland</option>
            <option value="france" id="France">France</option>
            <option value="gabon" id="Gabon">Gabon</option>
            <option value="georgia" id="Georgia">Georgia</option>
            <option value="germany" id="Germany">Germany</option>
            <option value="ghana" id="Ghana">Ghana</option>
            <option value="greece" id="Greece">Greece</option>
            <option value="guatemala" id="Guatemala">Guatemala</option>
            <option value="guinea" id="Guinea">Guinea</option>
            <option value="honduras" id="Honduras">Honduras</option>
            <option value="hungary" id="Hungary">Hungary</option>
            <option value="india" id="India">India</option>
            <option value="indonesia" id="Indonesia">Indonesia</option>
            <option value="iran" id="Iran">Iran</option>
            <option value="iraq" id="Iraq">Iraq</option>
            <option value="ireland" id="Ireland">Ireland</option>
            <option value="israel" id="Israel">Israel</option>
            <option value="italy" id="Italy">Italy</option>
            <option value="jamaica" id="Jamaica">Jamaica</option>
            <option value="japan" id="Japan">Japan</option>
            <option value="jordan" id="Jordan">Jordan</option>
            <option value="kazakhstan" id="Kazakhstan">Kazakhstan</option>
            <option value="kenya" id="Kenya">Kenya</option>
            <option value="south korea" id="South Korea">South Korea</option>
            <option value="kuwait" id="Kuwait">Kuwait</option>
            <option value="kyrgyzstan" id="Kyrgyzstan">Kyrgyzstan</option>
            <option value="laos" id="Laos">Laos</option>
            <option value="latvia" id="Latvia">Latvia</option>
            <option value="lebanon" id="Lebanon">Lebanon</option>
            <option value="lesotho" id="Lesotho">Lesotho</option>
            <option value="liberia" id="Liberia">Liberia</option>
            <option value="libya" id="Libya">Libya</option>
            <option value="lithuana" id="Lithuania">Lithuania</option>
            <option value="republic-of-macedonia" id="North Macedonia">North Macedonia</option>
            <option value="madagascar" id="Madagascar">Madagascar</option>
            <option value="malawi" id="Malawi">Malawi</option>
            <option value="malaysia" id="Malaysia">Malaysia</option>
            <option value="mali" id="Mali">Mali</option>
            <option value="mauritania" id="Mauritania">Mauritania</option>
            <option value="mauritius" id="Mauritius">Mauritius</option>
            <option value="mexico" id="Mexico">Mexico</option>
            <option value="moldova" id="Moldova">Moldova</option>
            <option value="mongolia" id="Mongolia">Mongolia</option>
            <option value="montenegro" id="Montenegro">Montenegro</option>
            <option value="morocco" id="Morocco">Morocco</option>
            <option value="mozambique" id="Mozambique">Mozambique</option>
            <option value="myanmar" id="Myanmar">Myanmar</option>
            <option value="namibia" id="Namibia">Namibia</option>
            <option value="netherlands" id="Netherlands">Netherlands</option>
            <option value="new-zealand" id="New Zealand">New Zealand</option>
            <option value="nicaragua" id="Nicaragua">Nicaragua</option>
            <option value="nigeria" id="Nigeria">Nigeria</option>
            <option value="norway" id="Norway">Norway</option>
            <option value="oman" id="Oman">Oman</option>
            <option value="pakistan" id="Pakistan">Pakistan</option>
            <option value="panama" id="Panama">Panama</option>
            <option value="papua-new-guinea" id="Papua New Guinea">Papua New Guinea</option>
            <option value="paraguay" id="Paraguay">Paraguay</option>
            <option value="peru" id="Peru">Peru</option>
            <option value="philippines" id="Philippines">Philippines</option>
            <option value="poland" id="Poland">Poland</option>
            <option value="portugal" id="Portugal">Portugal</option>
            <option value="qatar" id="Qatar">Qatar</option>
            <option value="romania" id="Romania">Romania</option>
            <option value="russia" id="Russia">Russia</option>
            <option value="saudi-arabia" id="Saudi Arabia">Saudi Arabia</option>
            <option value="senegal" id="Senegal">Senegal</option>
            <option value="serbia" id="Serbia">Serbia</option>
            <option value="singapore" id="Singapore">Singapore</option>
            <option value="slovakia" id="Slovakia">Slovakia</option>
            <option value="slovenia" id="Slovenia">Slovenia</option>
            <option value="south-africa" id="South Africa">South Africa</option>
            <option value="spain" id="Spain">Spain</option>
            <option value="sri-lanka" id="Sri Lanka">Sri Lanka</option>
            <option value="eswatini" id="Eswatini">Swaziland</option>
            <option value="sweden" id="Sweden">Sweden</option>
            <option value="switzerland" id="Switzerland">Switzerland</option>
            <option value="syria" id="Syria">Syria</option>
            <option value="tajikistan" id="Tajikistan">Tajikistan</option>
            <option value="tanzania" id="Tanzania">Tanzania</option>
            <option value="thailand" id="Thailand">Thailand</option>
            <option value="togo" id="Togo">Togo</option>
            <option value="trinidad" id="Trinidad and Tobago">Trinvaluead and Tobago</option>
            <option value="tunisia" id="Tunisia">Tunisia</option>
            <option value="turkey" id="Turkey">Turkey</option>
            <option value="turkmenistan" id="Turkmenistan">Turkmenistan</option>
            <option value="uganda" id="Uganda">Uganda</option>
            <option value="ukraine" id="Ukraine">Ukraine</option>
            <option value="united-arab-emirates" id="United Arab Emirates">United Arab Emirates</option>
            <option value="united-kingdom" id="United Kingdom">United Kingdom</option>
            <option value="united-states-of-america" id="United States of America">United States</option>
            <option value="uruguay" id="Uruguay">Uruguay</option>
            <option value="uzbekistan" id="Uzbekistan">Uzbekistan</option>
            <option value="venezuela" id="Venezuela">Venezuela</option>
            <option value="vietnam" id="Vietnam">Vietnam</option>
            <option value="yemen" id="Yemen">Yemen</option>
            <option value="zambia" id="Zambia">Zambia</option>
            <option value="zimbabwe" id="Zimbabwe">Zimbabwe</option>
        </select>
    </div>
  )
}
