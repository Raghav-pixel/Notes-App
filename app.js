const chalk	=	require('chalk');
const yargs	=	require('yargs');
const notes = require('./notes.js')

//Customize yargs version
yargs.version('1.1.0')


//create add command
yargs.command({
	command: 'add',
	describe: 'Add a new note',
	builder: {
		title: {
			describe: 'Notes title',
			demandOption: true,
			type: 'string'
		},

		body: {
			describe: 'Notes body',
			demandOption: true,
			type: 'string'
		}
	},
	handler(argv){
		notes.addNote(argv.title, argv.body)
	}
})


//create remove command
yargs.command({
	command: 'remove',
	describe: 'remove a note',
	builder: {
		title: {
			describe: 'Notes title',
			demandOption: true,
			type: 'string'
		}
	},
	handler(argv){
		notes.removeNote(argv.title)
	}
})


//	Create list command
yargs.command({
	command: 'list',
	describe: 'list the notes',
	handler(){
		notes.listNotes()
	}
})


	//	Create read command
yargs.command({
	command: 'read',
	describe: 'read the note',
	builder: {
		title: {
			describe: 'Note Title',
			demandOption: true,
			type: 'string'
		}
	},
	handler(argv){
		notes.readNotes(argv.title)
	}
})

yargs.parse()