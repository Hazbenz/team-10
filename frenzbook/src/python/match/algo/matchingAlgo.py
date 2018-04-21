import os, sys
from flask import Flask
from flask import request
import requests
import simplejson
import MySQLdb
import pandas  as pd
from pandas import DataFrame
from fuzzywuzzy import process 
import 

from datetime import datetime
from dateutil.parser import parse

app = Flask(__name__)

if __name__ == '__main__':
	app.run(debug=True)

@app.route('/')
def index():
	return "Hello World!"

@app.route('/matching_algo/{id}', methods = ['GET'])
def matchingAlgo():
	request = requests.get('httos://frenzbook.com/getRecommentdations');
	data = simplejson.loads(request)

	members = getMember(data)
	buddies = getBuddies(members)
	matches = fuzzywuzzy(buddies)


def getMember(data)
	member.setInterest = data.getInterest()
	member.setLocation = data.getLocation()
	member.setPersonality = data.getPersonality()
	member.setSchedule = data.getSchedule()
	member.setExperience = data.getExperience()

	members.add(member)

 	return members


def getBuddies(members)
	db = MySQLdb.connect("localhost", "user", "pwd", "default_db")
	cursor = db.cursor()
	sql = "select * from users where interest = " member.getInterest " and location = " member.getLocation " and personality =" member.personality 
			" and schedule = " member.getSchedule " and experience = " member.getExperience 
	try
		buddies = cursor.execute(sql)
		dv.commit()
		
	except:
		db.rollback()
	db.close()
	
	return buddies


def fuzzywuzzy(buddies)
	



