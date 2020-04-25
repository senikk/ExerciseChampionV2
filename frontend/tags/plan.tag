<plan>
    <style>
        .drag-ghost .collection-item {
            background-color: green !important;
        }
    </style>

    <actions title="title.plan"></actions>

    <div>
        <div class="row">
            <div class="col s12">
            <ul ref="tabs" class="tabs">
                <li class="tab col s2"><a class="active" href="#plan"><i class="material-icons">mode_edit</i> { i18n.t('plan.plan.tab') }</a></li>
                <li class="tab col s2"><a href="#searchsession"><i class="material-icons">search</i> { i18n.t('plan.searchsession.tab') }</a></li>
            </ul>
            </div>
            <div id="plan" class="col s12">            
                <div class="row">
                    <div class="col s12">
                        <div class="card blue-grey darken-3">
                            <div class="card-content white-text">
                                <span class="card-title">{ i18n.t('plan.plan.title') }</span>
                                <div class="input-field">
                                    <textarea ref="title" class="materialize-textarea" placeholder={ i18n.t('plan.title') }></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>          
                <!-- List sessions -->
                <div class="row">
                    <div class="col s12" ref="sessions">
                        <div each={ sessions }>
                            <div class="card blue-grey darken-1 collection-item">                   
                                <div class="card-content white-text">
                                    <i class="material-icons right">drag_handle</i>
                                    <span class="card-title">{ title }</span>
                                    <div class="secondary-content">
                                        <span class="badge">{ i18n.t('minutes', {minutes: minutes}) }</span>
                                    </div>
                                    <p>{ description }</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Add new session -->
                <div class="row">
                    <div class="col s12">
                        <div class="card blue-grey darken-3">
                            <div class="card-content white-text">
                                <addsession></addsession>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
            <div id="searchsession" class="col s12">
                <div class="row">
                    <div class="col s12">
                        <div class="card blue-grey darken-2">
                            <div class="card-content white-text">
                                <span class="card-title">{ i18n.t('plan.searchsession.title') }</span>
                                <i class="material-icons prefix">textsms</i>
                                <input type="text" id="autocomplete-input" class="autocomplete">
                                <label for="autocomplete-input">Autocomplete</label>
                            </div>
                        </div>
                    </div>
                </div>   
            </div>
        </div>
    </div>

    <script>
        this.sessions = [
            {
                title: 'Flesibilitet',
                user: { name: 'Terje Pedersen' },
                minutes: 10,
                description: 'Øv på fleksibilitetsøvelse fra arket.'
            },
            {
                title: 'Hymne',
                user: { name: 'Terje Pedersen' },
                minutes: 2,
                description: 'Vanlig. Som åttendel på hvert slag.'
            }
        ];

        this.on("mount", () => {
            M.Tabs.init(this.refs.tabs);

            console.log("= REF", this.refs.sessions);
            if (this.refs.sessions) {
                new Sortable(this.refs.sessions, {
                    animation: 150,
                    ghostClass: 'drag-ghost',
                    onEnd: (event) => {
                        console.log("= END", event);
                    }
                });
            }
        });

        add() {

        }

    </script>
</plan>