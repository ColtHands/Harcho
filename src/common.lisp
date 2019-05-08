(defvar libfile (merge-pathnames "./lib/123.lisp" *load-truename*))

(load libfile)
(print *load-pathname*)
(print *load-truename*)
(print *default-pathname-defaults*)


(defun p-5 (l)
    "Takes a list (l) of positive integers, and returns their least common multiple (LCM). Uses the built-in function LCM."
    (reduce #'lcm l))

(defun range (maxi &key (mini 0) (step 1))
    "Takes a value (maxi) and keyword arguments (mini and step), and returns a list of numbers ranging from mini to maxi in steps of step."
    (loop :for n :from mini :to maxi :by step :collect n))

(print (p-5 (range 20 :mini 1 :step 1)))

(defun main1()
    (format t "Hello, world!~%")
    (read)
)

;; компилит .exe
;; (sb-ext:save-lisp-and-die "hw.exe"
;;     :executable t
;;     :toplevel 'main)