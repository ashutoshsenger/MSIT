import {DateTimeFormatter} from 'js-joda';
import Classes from "./Schedule.css";
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import $ from "jquery";
import jsPDF from 'jspdf';
const LocalDate =require('js-joda').LocalDate;



var d = LocalDate.parse('2012-12-24').plusMonths(2).format(DateTimeFormatter.ofPattern('d MM yyyy'));
console.log(d);



export default class Schedule extends Component {
    constructor(props){
      super(props)
      this.state={
        date:'2012-05-11',
        name:"",
        value: localStorage.getItem("date")
      }
    }



   demoFromHTML = () => {
    var pdf = new jsPDF('p', 'pt', 'letter');
    // source can be HTML-formatted string, or a reference
    // to an actual DOM element from which the text will be scraped.
    var source = $('#customers')[0];

    // we support special element handlers. Register them with jQuery-style 
    // ID selector for either ID or node name. ("#iAmID", "div", "span" etc.)
    // There is no support for any other type of selectors 
    // (class, of compound) at this time.
    var specialElementHandlers = {
        // element with id of "bypass" - jQuery style selector
        '#bypassme': function (element, renderer) {
            // true = "handled elsewhere, bypass text extraction"
            return true
        }
    };
    var margins = {
        top: 80,
        bottom: 60,
        left: 40,
        width: 522
    };
    // all coords and widths are in jsPDF instance's declared units
    // 'inches' in this case
    pdf.fromHTML(
    source, // HTML string or DOM elem ref.
    margins.left, // x coord
    margins.top, { // y coord
        'width': margins.width, // max width of content on PDF
        'elementHandlers': specialElementHandlers
    },

    function (dispose) {
        // dispose: object with X, Y of the last line add to the PDF 
        //          this allow the insertion of new lines after html
        pdf.save('schedule.pdf');
    }, margins);
}















    componentWillMount(){
      localStorage.setItem("date",this.state.date);
      console.log(this.state.date+"hfjfbjn")
    }


    handleSubmit=(event)=>{
      event.preventDefault()
      localStorage.setItem("date",this.state.date);
      console.log("clicked")
      console.log(localStorage.getItem("date"))
      this.setState({value: localStorage.getItem("date") })
    }
    handleInputChange=(event)=>{
      event.preventDefault();
      this.setState({

        [event.target.name]: event.target.value

      })
    }

  render(){
    const {date,name,value}=this.state;
    console.log(date);
    console.log(value);


    return(
      <div>
        <br/> <br/> <br/> <br/> <br/>



      <h3 className='bold underlined' align= "center">Table-Data</h3>

      <section id="content" style={{marginBottom: '0px'}}>

        <div class="content-wrap">

          <div class="container clearfix">

            <div class="row clearfix">

              <div class="col-sm-8">




                <div class="row clearfix">

                  <div class="col-md-12">

                    <div
                      class="tabs tabs-alt clearfix ui-tabs ui-widget ui-widget-content ui-corner-all"
                      id="tabs-profile">



                      <div class="tab-container">

                        <div
                          class="tab-content clearfix ui-tabs-panel ui-widget-content ui-corner-bottom"
                          id="tab-feeds" aria-labelledby="ui-id-1" role="tabpanel"
                          aria-hidden="false">

                          <div class="table-responsive">


                            <div>
                                <table id="customers">
                        <tbody>
                          <tr id="first">
                            <th>S.No</th>
                            <th>Vaccine</th>
                            <th>Prevents</th>
                            <th>Dose 1</th>
                            <th>Dose 2</th>
                            <th>Dose 3</th>
                            <th>Dose 4</th>
                            <th>Dose 5</th>
                          </tr>
                          <tr>
                            <td>1</td>
                            <td>BCG</td>
                            <td>TB &amp; bladder cancer</td>
                            <td>Birth</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>HepB</td>
                            <td>Hepatitis B</td>
                            <td>Birth</td>
                            <td>4 weeks</td>
                            <td>8 weeks</td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Poliovirus</td>
                            <td>Polio</td>
                            <td>Birth</td>
                            <td>4 weeks</td>
                            <td>4 weeks</td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>DTP</td>
                            <td>Diphtheria, Tetanus &amp; Pertussis</td>
                            <td>6 weeks</td>
                            <td>4 weeks</td>
                            <td>4 weeks</td>
                            <td>6 months (Booster 1)</td>
                            <td>3 years (Booster 2)</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>Hib</td>
                            <td>Infections caused by Bacteria</td>
                            <td>6 weeks</td>
                            <td>4 weeks</td>
                            <td>4 weeks</td>
                            <td>6 months (Booster 1)</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>6</td>
                            <td>PCV</td>
                            <td>Pneumonia</td>
                            <td>6 weeks</td>
                            <td>4 weeks</td>
                            <td>4 weeks</td>
                            <td>6 months (Booster 1)</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>7</td>
                            <td>RV</td>
                            <td>Severe Diarrheal Disease</td>
                            <td>6 weeks</td>
                            <td>4 weeks</td>
                            <td>4 weeks</td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>8</td>
                            <td>Typhoid</td>
                            <td>Typhoid Fever, Diarrhea</td>
                            <td>9 months</td>
                            <td>15 months (Booster 1)</td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>9</td>
                            <td>MMR</td>
                            <td>Measles, Mumps &amp; Rubella</td>
                            <td>9 months</td>
                            <td>6 months</td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>10</td>
                            <td>Varicella</td>
                            <td>Chickenpox</td>
                            <td>1 year</td>
                            <td>3 months</td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>11</td>
                            <td>HepA</td>
                            <td>Liver disease</td>
                            <td>1 year</td>
                            <td>6 months</td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>12</td>
                            <td>Tdap</td>
                            <td>Diphtheria, Tetanus &amp; Pertussis</td>
                            <td>7 years</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>13</td>
                            <td>HPV</td>
                            <td>Some Cancers &amp; Warts</td>
                            <td>9 years</td>
                            <td>For Child aged 9-14 years: 6 months. For Child
                              aged 15 or more: 1 month</td>
                            <td>For Child aged 15 or more: 5 months</td>
                            <td></td>
                            <td></td>
                          </tr>
                        </tbody>
                      </table>													</div>






                            <h4> <b>
                            </b></h4>
                            <div>
                             <table id="customer">
                        <tbody>
                          <tr id="first">
                            <th id="top">S.No</th>
                            <th id="top">Vaccine</th>
                            <th id="top">Prevents</th>
                            <th id="top">Dose 1</th>
                            <th id="top">Dose 2</th>
                            <th id="top">Dose 3</th>
                            <th id="top">Dose 4</th>
                            <th id="top">Dose 5</th>
                          </tr>
                          <tr>
                                  <td>1</td>
                                  <td>BCG</td>
                                  <td>TB &amp; bladder cancer</td>

                                  <td>{ LocalDate.parse(value).plusDays(0).format(DateTimeFormatter.ofPattern('d MM yyyy'))}</td>
                                  <td>>{ LocalDate.parse(value).plusMonths(3).format(DateTimeFormatter.ofPattern('d MM yyyy'))}</td>
                                  <td></td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td>2</td>
                                  <td>HepB</td>
                                  <td>Hepatitis B</td>
                                  <td>{ LocalDate.parse(value).plusDays(0).format(DateTimeFormatter.ofPattern('d MM yyyy'))}</td>
                                  <td>{ LocalDate.parse(value).plusWeeks(4).format(DateTimeFormatter.ofPattern('d MM yyyy'))}</td>
                                  <td>{ LocalDate.parse(value).plusWeeks(8).format(DateTimeFormatter.ofPattern('d MM yyyy'))}</td>
                                  <td></td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td>3</td>
                                  <td>Poliovirus</td>
                                  <td>Polio</td>
                                  <td>{ LocalDate.parse(value).plusDays(0).format(DateTimeFormatter.ofPattern('d MM yyyy'))}</td>
                                  <td>{ LocalDate.parse(value).plusWeeks(4).format(DateTimeFormatter.ofPattern('d MM yyyy'))}</td>
                                  <td>{ LocalDate.parse(value).plusWeeks(4).format(DateTimeFormatter.ofPattern('d MM yyyy'))}</td>
                                  <td></td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td>4</td>
                                  <td>DTP</td>
                                  <td>Diphtheria, Tetanus &amp; Pertussis</td>
                                  <td>{ LocalDate.parse(value).plusWeeks(6).format(DateTimeFormatter.ofPattern('d MM yyyy'))}</td>
                                  <td>{ LocalDate.parse(value).plusWeeks(4).format(DateTimeFormatter.ofPattern('d MM yyyy'))}</td>
                                  <td>{ LocalDate.parse(value).plusWeeks(4).format(DateTimeFormatter.ofPattern('d MM yyyy'))}</td>
                                  <td>{ LocalDate.parse(value).plusMonths(6).format(DateTimeFormatter.ofPattern('d MM yyyy'))}</td>
                                  <td>{ LocalDate.parse(value).plusYears(3).format(DateTimeFormatter.ofPattern('d MM yyyy'))}</td>
                                </tr>
                                <tr>
                                  <td>5</td>
                                  <td>Hib</td>
                                  <td>Infections caused by Bacteria</td>
                                  <td>{ LocalDate.parse(value).plusWeeks(6).format(DateTimeFormatter.ofPattern('d MM yyyy'))}</td>
                                  <td>{ LocalDate.parse(value).plusWeeks(4).format(DateTimeFormatter.ofPattern('d MM yyyy'))}</td>
                                  <td>{ LocalDate.parse(value).plusWeeks(4).format(DateTimeFormatter.ofPattern('d MM yyyy'))}</td>
                                  <td>{ LocalDate.parse(value).plusMonths(6).format(DateTimeFormatter.ofPattern('d MM yyyy'))}</td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td>6</td>
                                  <td>PCV</td>
                                  <td>Pneumonia</td>
                                  <td>{ LocalDate.parse(value).plusWeeks(6).format(DateTimeFormatter.ofPattern('d MM yyyy'))}</td>
                                  <td>{ LocalDate.parse(value).plusWeeks(4).format(DateTimeFormatter.ofPattern('d MM yyyy'))}</td>
                                  <td>{ LocalDate.parse(value).plusWeeks(4).format(DateTimeFormatter.ofPattern('d MM yyyy'))}</td>
                                  <td>{ LocalDate.parse(value).plusMonths(6).format(DateTimeFormatter.ofPattern('d MM yyyy'))}</td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td>7</td>
                                  <td>RV</td>
                                  <td>Severe Diarrheal Disease</td>
                                  <td>{ LocalDate.parse(value).plusWeeks(6).format(DateTimeFormatter.ofPattern('d MM yyyy'))}</td>
                                  <td>{ LocalDate.parse(value).plusWeeks(4).format(DateTimeFormatter.ofPattern('d MM yyyy'))}</td>
                                  <td>{ LocalDate.parse(value).plusWeeks(4).format(DateTimeFormatter.ofPattern('d MM yyyy'))}</td>
                                  <td></td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td>8</td>
                                  <td>Typhoid</td>
                                  <td>Typhoid Fever, Diarrhea</td>
                                  <td>{ LocalDate.parse(value).plusMonths(9).format(DateTimeFormatter.ofPattern('d MM yyyy'))}</td>
                                  <td>{ LocalDate.parse(value).plusMonths(15).format(DateTimeFormatter.ofPattern('d MM yyyy'))}</td>
                                  <td>>{ LocalDate.parse(value).plusMonths(3).format(DateTimeFormatter.ofPattern('d MM yyyy'))}</td>
                                  <td></td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td>9</td>
                                  <td>MMR</td>
                                  <td>Measles, Mumps &amp; Rubella</td>
                                  <td>{ LocalDate.parse(value).plusMonths(9).format(DateTimeFormatter.ofPattern('d MM yyyy'))}</td>
                                  <td>{ LocalDate.parse(value).plusMonths(6).format(DateTimeFormatter.ofPattern('d MM yyyy'))}</td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td>10</td>
                                  <td>Varicella</td>
                                  <td>Chickenpox</td>
                                  <td>{ LocalDate.parse(value).plusYears(1).format(DateTimeFormatter.ofPattern('d MM yyyy'))}</td>
                                  <td>{ LocalDate.parse(value).plusMonths(3).format(DateTimeFormatter.ofPattern('d MM yyyy'))}</td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td>11</td>
                                  <td>HepA</td>
                                  <td>Liver disease</td>
                                  <td>>{ LocalDate.parse(value).plusMonths(4).format(DateTimeFormatter.ofPattern('d MM yyyy'))}</td>
                                  <td> >{ LocalDate.parse(value).plusMonths(18).format(DateTimeFormatter.ofPattern('d MM yyyy'))}</td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td>12</td>
                                  <td>Tdap</td>
                                  <td></td>
                                  <td></td>
                                  <td>{ LocalDate.parse(value).plusYears(7).format(DateTimeFormatter.ofPattern('d MM yyyy'))}</td>
                                  <td></td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td>13</td>
                                  <td>HPV</td>
                                  <td>Some Cancers &amp; Warts</td>
                                  <td>>{ LocalDate.parse(value).plusMonths(9).format(DateTimeFormatter.ofPattern('d MM yyyy'))}</td>
                                  <td>>{ LocalDate.parse(value).plusMonths(12).format(DateTimeFormatter.ofPattern('d MM yyyy'))}</td>
                                  <td>>{ LocalDate.parse(value).plusMonths(3).format(DateTimeFormatter.ofPattern('d MM yyyy'))}</td>
                                  <td>>{ LocalDate.parse(value).plusMonths(1).format(DateTimeFormatter.ofPattern('d MM yyyy'))}</td>
                                  <td>>{ LocalDate.parse(value).plusMonths(5).format(DateTimeFormatter.ofPattern('d MM yyyy'))}</td>
                                </tr>
                              </tbody>


                      </table>													</div>




                          </div>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>
                <button onClick={this.demoFromHTML} className="pdfbutton">Download pdf</button>
              </div>

              <div class="col-sm-4 clearfix">
                <div class="tab-container">
                  <br/> <br/> <br/> <br/>

                  <div
                    class="tab-content clearfix ui-tabs-panel ui-widget-content ui-corner-bottom"
                    id="tab-feeds" aria-labelledby="ui-id-1" role="tabpanel"
                    aria-hidden="false">




                    <div class="fancy-title topmargin title-border">
                      <h4>About Us</h4>
                    </div>

                    <p>Our aim is to increase immunisation for children by
                      providing timely vaccination reminders to parents and
                      spreading awareness.</p>



                  </div>
                </div>
                <br/> <br/>



                <div class="tab-container">

                  <div
                    class="tab-content clearfix ui-tabs-panel ui-widget-content ui-corner-bottom"
                    id="tab-feeds" aria-labelledby="ui-id-1" role="tabpanel"
                    aria-hidden="false">




                    <div class="fancy-title topmargin title-border">
                      <h4>fill in the form to know the date of vaccine schedule</h4>
                    </div>


                    <form onSubmit={this.handleSubmit} >


                      NAME:<input id="txtName" type="text" name="name" value={name} onChange={this.handleInputChange}  />
                      <span id="spmsg" style={{display: 'none', color: 'red', fontSize:'13px'}}></span><br/>
                      DATE:
                      <input   type="text" id="thullu" name="date" onChange={this.handleInputChange}  value={date}/>
                      <span id="msg" style={{display:'none',color:'red',fontSize:'13px'}}><br/></span><br></br>
                      <button type="Submit" id="button-id" name="submit" onClick="this.handleSubmit()">Get Schedule</button>

                    </form>


                  </div>
                </div>
              </div>




            </div>

          </div>
        </div>

      </section>


      </div>
    );
  }
}
