#!/bin/bash

xo schema --go-field-tag "json:\"{{ .SQLName }}\" db:\"{{ .SQLName }}\"" mysql://root:dc@3.96.135.171:3306/Attractech -o model
