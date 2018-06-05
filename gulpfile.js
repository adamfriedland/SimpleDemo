"use strict";

const gulp = require("gulp");
const gulpMainBowerFiles = require("gulp-main-bower-files");

// const test1 = gulp.src("./bower.json")
// 	.pipe(gulpMainBowerFiles())
// 	.pipe(gulp.dest("./lib"));

gulp.task("Copy:Bower", () => {

	return gulp.src("./bower.json")
		.pipe(gulpMainBowerFiles())
		.pipe(gulp.dest("./lib"));
});


