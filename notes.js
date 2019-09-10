const fs	=	require('fs')
const chalk	=	require('chalk')


//	Adding a Note

const addNote	=	(title, body) => {
	const notes = loadNotes()

const duplicateNotes	=	notes.filter((note) => note.title === title)

if(duplicateNotes.length == 0){
	notes.push({
		title: title,
		body: body
	})
	saveNotes(notes)
	console.log(chalk.green.inverse('Note added'))
}else{
	console.log(chalk.red.inverse('note taken'))
}
}


	//	Removing notes

const removeNote	=	(title) => {
	const notes = loadNotes()
	const notesToKeep	=	notes.filter((note) => note.title !== title)

	if(notes.length > notesToKeep.length){
		console.log(chalk.green.inverse('Note removed!'))
		saveNotes(notesToKeep)
	}else{
		console.log(chalk.red.inverse('No note found!'))
	}
	
}


	//	Listing notes

const listNotes	=	() => {
	const notes = loadNotes()

	console.log(chalk.green.inverse('Your notes'))

	 notes.forEach((note) => {
		console.log(note.title)
	})
}


	//	Reading notes

const readNotes	=	(title) => {
	const notes = loadNotes()
	const note = notes.find((note) => note.title === title)

	if(note){
		console.log(chalk.inverse(note.title))
		console.log(note.body)
	}
	else{
		console.log(chalk.red.inverse('Note not found'))
	}
}


	//	Saving notes

const saveNotes	=	(notes) => {
	const dataJSoN	=	JSON.stringify(notes)
	fs.writeFileSync('notes.json', dataJSoN)
}


	//	Loading notes

	const loadNotes	=	() => {
try{
	const dataBuffer	=	fs.readFileSync('notes.json')
	const dataJSoN	=	dataBuffer.toString()
	return JSON.parse(dataJSoN)
}
catch(e){
	return []
}
}



module.exports	=	{
	addNote: addNote,
	removeNote: removeNote,
	listNotes: listNotes,
	readNotes: readNotes
}