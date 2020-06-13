'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">app-maite documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/ActivityEntryModule.html" data-type="entity-link">ActivityEntryModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ActivityEntryModule-2b8836b559de254a2c9edc865cc11fee"' : 'data-target="#xs-components-links-module-ActivityEntryModule-2b8836b559de254a2c9edc865cc11fee"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ActivityEntryModule-2b8836b559de254a2c9edc865cc11fee"' :
                                            'id="xs-components-links-module-ActivityEntryModule-2b8836b559de254a2c9edc865cc11fee"' }>
                                            <li class="link">
                                                <a href="components/ActivityEntryComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ActivityEntryComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AddActivityEntryModule.html" data-type="entity-link">AddActivityEntryModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AddActivityEntryModule-1a24dd20317e4ec1c75817cee00036c8"' : 'data-target="#xs-components-links-module-AddActivityEntryModule-1a24dd20317e4ec1c75817cee00036c8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AddActivityEntryModule-1a24dd20317e4ec1c75817cee00036c8"' :
                                            'id="xs-components-links-module-AddActivityEntryModule-1a24dd20317e4ec1c75817cee00036c8"' }>
                                            <li class="link">
                                                <a href="components/AddActivityEntryComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AddActivityEntryComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-68d1d2f58b0961dfcd4fe7a8bea3f976"' : 'data-target="#xs-components-links-module-AppModule-68d1d2f58b0961dfcd4fe7a8bea3f976"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-68d1d2f58b0961dfcd4fe7a8bea3f976"' :
                                            'id="xs-components-links-module-AppModule-68d1d2f58b0961dfcd4fe7a8bea3f976"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InvoicesListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InvoicesListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BalanceModule.html" data-type="entity-link">BalanceModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ClientesModule.html" data-type="entity-link">ClientesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ClientesModule-bb56089b6d87cd38ad6329e08e138f3b"' : 'data-target="#xs-components-links-module-ClientesModule-bb56089b6d87cd38ad6329e08e138f3b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ClientesModule-bb56089b6d87cd38ad6329e08e138f3b"' :
                                            'id="xs-components-links-module-ClientesModule-bb56089b6d87cd38ad6329e08e138f3b"' }>
                                            <li class="link">
                                                <a href="components/ClientesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ClientesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InsertClientComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InsertClientComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CompanyModule.html" data-type="entity-link">CompanyModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CompanyModule-725ed2d0d6dddc51368859e78971d1f1"' : 'data-target="#xs-components-links-module-CompanyModule-725ed2d0d6dddc51368859e78971d1f1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CompanyModule-725ed2d0d6dddc51368859e78971d1f1"' :
                                            'id="xs-components-links-module-CompanyModule-725ed2d0d6dddc51368859e78971d1f1"' }>
                                            <li class="link">
                                                <a href="components/CompanyComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CompanyComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ContabilidadModule.html" data-type="entity-link">ContabilidadModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ContabilidadModule-69234a0b1d3b35476781d8e44225082e"' : 'data-target="#xs-components-links-module-ContabilidadModule-69234a0b1d3b35476781d8e44225082e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ContabilidadModule-69234a0b1d3b35476781d8e44225082e"' :
                                            'id="xs-components-links-module-ContabilidadModule-69234a0b1d3b35476781d8e44225082e"' }>
                                            <li class="link">
                                                <a href="components/BalanceComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BalanceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContabilidadComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ContabilidadComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ExpensesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ExpensesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IncomesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">IncomesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InsertExpenseComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InsertExpenseComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ResumeIncomesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ResumeIncomesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DetailClientModule.html" data-type="entity-link">DetailClientModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DetailClientModule-541f20cba53e7c79e39ee0f08e81fcdd"' : 'data-target="#xs-components-links-module-DetailClientModule-541f20cba53e7c79e39ee0f08e81fcdd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DetailClientModule-541f20cba53e7c79e39ee0f08e81fcdd"' :
                                            'id="xs-components-links-module-DetailClientModule-541f20cba53e7c79e39ee0f08e81fcdd"' }>
                                            <li class="link">
                                                <a href="components/AddAttendanceComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AddAttendanceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddPayComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AddPayComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DetailClientComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DetailClientComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InvoicesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InvoicesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UpdateClientComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UpdateClientComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DiarioModule.html" data-type="entity-link">DiarioModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DiarioModule-7003a11b082ba0ca13ed78a59bbeddff"' : 'data-target="#xs-components-links-module-DiarioModule-7003a11b082ba0ca13ed78a59bbeddff"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DiarioModule-7003a11b082ba0ca13ed78a59bbeddff"' :
                                            'id="xs-components-links-module-DiarioModule-7003a11b082ba0ca13ed78a59bbeddff"' }>
                                            <li class="link">
                                                <a href="components/DiarioComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DiarioComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ExpensesModule.html" data-type="entity-link">ExpensesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ExpensesModule-952393af710144cfc95530583b659a47"' : 'data-target="#xs-components-links-module-ExpensesModule-952393af710144cfc95530583b659a47"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ExpensesModule-952393af710144cfc95530583b659a47"' :
                                            'id="xs-components-links-module-ExpensesModule-952393af710144cfc95530583b659a47"' }>
                                            <li class="link">
                                                <a href="components/ExpensesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ExpensesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InsertExpenseComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InsertExpenseComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/IncomesModule.html" data-type="entity-link">IncomesModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/InvoicesListModule.html" data-type="entity-link">InvoicesListModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/InvoicesModule.html" data-type="entity-link">InvoicesModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PricesModule.html" data-type="entity-link">PricesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PricesModule-b4b9f11f352e6dd363ff8202ae0aeeb9"' : 'data-target="#xs-components-links-module-PricesModule-b4b9f11f352e6dd363ff8202ae0aeeb9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PricesModule-b4b9f11f352e6dd363ff8202ae0aeeb9"' :
                                            'id="xs-components-links-module-PricesModule-b4b9f11f352e6dd363ff8202ae0aeeb9"' }>
                                            <li class="link">
                                                <a href="components/PricesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PricesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ResumeIncomesModule.html" data-type="entity-link">ResumeIncomesModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ScheduleModule.html" data-type="entity-link">ScheduleModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ScheduleModule-385f137bff15d0a3185d8bdcee887c6e"' : 'data-target="#xs-components-links-module-ScheduleModule-385f137bff15d0a3185d8bdcee887c6e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ScheduleModule-385f137bff15d0a3185d8bdcee887c6e"' :
                                            'id="xs-components-links-module-ScheduleModule-385f137bff15d0a3185d8bdcee887c6e"' }>
                                            <li class="link">
                                                <a href="components/AddActivityComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AddActivityComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DefaultersComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DefaultersComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ScheduleComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ScheduleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UpdateScheduleComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UpdateScheduleComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link">UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UsersModule-646768c487be014ff9ab016980714692"' : 'data-target="#xs-components-links-module-UsersModule-646768c487be014ff9ab016980714692"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UsersModule-646768c487be014ff9ab016980714692"' :
                                            'id="xs-components-links-module-UsersModule-646768c487be014ff9ab016980714692"' }>
                                            <li class="link">
                                                <a href="components/UsersComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UsersComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/BoxComponent.html" data-type="entity-link">BoxComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/InfoComponent.html" data-type="entity-link">InfoComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Activity.html" data-type="entity-link">Activity</a>
                            </li>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                            </li>
                            <li class="link">
                                <a href="classes/Balance.html" data-type="entity-link">Balance</a>
                            </li>
                            <li class="link">
                                <a href="classes/Client.html" data-type="entity-link">Client</a>
                            </li>
                            <li class="link">
                                <a href="classes/Expense.html" data-type="entity-link">Expense</a>
                            </li>
                            <li class="link">
                                <a href="classes/Invoicing.html" data-type="entity-link">Invoicing</a>
                            </li>
                            <li class="link">
                                <a href="classes/InvoicingClass.html" data-type="entity-link">InvoicingClass</a>
                            </li>
                            <li class="link">
                                <a href="classes/Pass.html" data-type="entity-link">Pass</a>
                            </li>
                            <li class="link">
                                <a href="classes/Pay.html" data-type="entity-link">Pay</a>
                            </li>
                            <li class="link">
                                <a href="classes/Price.html" data-type="entity-link">Price</a>
                            </li>
                            <li class="link">
                                <a href="classes/Prices.html" data-type="entity-link">Prices</a>
                            </li>
                            <li class="link">
                                <a href="classes/Users.html" data-type="entity-link">Users</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AddPayService.html" data-type="entity-link">AddPayService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AttendanceService.html" data-type="entity-link">AttendanceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BalanceService.html" data-type="entity-link">BalanceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ClientesService.html" data-type="entity-link">ClientesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CompanyService.html" data-type="entity-link">CompanyService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DiarioService.html" data-type="entity-link">DiarioService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ExpensesService.html" data-type="entity-link">ExpensesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FunctionsService.html" data-type="entity-link">FunctionsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/IncomesService.html" data-type="entity-link">IncomesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/InvoicesService.html" data-type="entity-link">InvoicesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PricesService.html" data-type="entity-link">PricesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ResumeIncomesService.html" data-type="entity-link">ResumeIncomesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ScheduleService.html" data-type="entity-link">ScheduleService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link">UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/DataUpdate.html" data-type="entity-link">DataUpdate</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DialogData.html" data-type="entity-link">DialogData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DialogData-1.html" data-type="entity-link">DialogData</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});