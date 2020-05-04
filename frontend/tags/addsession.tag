<addsession>
    <style>
        #scoreview {
            background: white;
        }
    </style>

    <form>
        <div class="input-field">
  	        <textarea ref="title" class="materialize-textarea" placeholder={ i18n.t('addsession.title') }></textarea>
        </div>
        <input ref="minutes" placeholder={ i18n.t('addsession.howmanyminutes') }>
        <div class="input-field">
  	        <textarea ref="description" class="materialize-textarea" placeholder={ i18n.t('addsession.description') }></textarea>
        </div>
        <div class="input-field">
  	        <textarea ref="score" id="scoreedit" class="materialize-textarea" placeholder={ i18n.t('addsession.score') }>
                A2 z2 C2 z2 | A2 z2 C2 z2
            </textarea>
            <div ref="scoreview" id="scoreview"></div>
            <div id="scorewarning"></div>
        </div>
        <button disabled={ !description || minutes <= 0 } onclick={ add } class="btn waves-effect waves-light">
  		    <i class="material-icons right">send</i> { i18n.t('addsession.send') }
  	    </button>
    </form>

    <script>            
        add() {

        }

        this.on("mount", () => {
            if (this.refs.scoreview) {
                //this.abcjs.renderAbc('scoreview', 'X:1\nT: Cooley\'s\nM: 4/4\nL: 1/8\nR: reel\nK: Emin\nD2');
                this.editor = new this.abcjs.Editor('scoreedit', {
                    canvas_id: 'scoreview',
                    warnings_id: 'scorewarning',
                    generate_warnings: true,
                    abcjsParams: {
                        scale: 0.8
                    }
                });
            }
        });

    </script>
</addsession>