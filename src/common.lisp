;; (require "asdf")
;; (print (asdf:asdf-version))

;; (print (merge-pathnames *default-pathname-defaults* "/src/123.lisp"))
;; (load (merge-pathnames *default-pathname-defaults* "src/123.lisp"))
(defvar libfile (merge-pathnames "./lib/123.lisp" *load-truename*))

;; (defvar src-directory (concatenate *default-pathname-defaults* "/src/123.lisp"))

(load libfile)
;; (print *load-pathname*)
(print *load-truename*)

;; (format t "hello format")
(print "hello print")
(print 123)

;; (format t "input text ~%")

(defvar bih "asd")

(print bih)

(print *default-pathname-defaults*)

(defun main()
    (format t "Hello, world!~%")
    (read)
)

;; (sb-ext:save-lisp-and-die "hw"
;;     :executable t
;;     :toplevel 'main)