import os, sys
from flask import Flask
from flask import request
import requests
import simplejson
import MySQLdb
import pandas  as pd
from pandas import DataFrame
from fuzzywuzzy import fuzz
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
	request = requests.get('https://frenzbook.com/getRecommentdations');
	data = simplejson.loads(request)

	member = getMember(data)
	buddies = getUser(member)
	matches = fuzzywuzzy(member,buddies)

	return matches


def getMember(input)
	data = getUser(input)
	for user in data:
		member.setGender(user.getGender())
		member.setGenderPreference(user.getGenderPreference())
		member.setAge(user.getAge())
		member.setInterest(user.getInterest())
		member.setLocation(user.getLocation())
		member.setPersonality(user.getPersonality())
		member.setSchedule(user.getSchedule())
		member.setExperience(user.getExperience())
		member.setRoleType(user.getRoleType())
		member.setSubType(user.getSubType())

		members.add(user)
	return members


def getUser(members)
	db = MySQLdb.connect("localhost", "user", "pwd", "default_db")
	cursor = db.cursor()
	sql = "select id, firstName, lastName, roleType, subType, interest, location, personality, schedule, experience, age, gender, genderPreference, roleType, subType, from users where id = " member.getId " and interest = " member.getInterest " or location = " member.getLocation " or personality =" member.personality 
			" or schedule = " member.getSchedule " or experience = " member.getExperience 
	try
		buddies = cursor.execute(sql)
		db.commit()
		
	except:
		db.rollback()
	db.close()
	
	return buddies


def fuzzywuzzy(member,buddies)
	for buddy in buddies:
		addMatch(match, fuzz.ratio(member, buddy))  #Exact Match
		addMatch(match, fuzz.partial_ratio(member, buddy)) # Ratio - match
    	addMatch(match, fuzz.token_sort_ratio(member,buddy)) # Partial Ratio - Punctuation
    	addMatch(match, fuzz.token_setratio(member,buddy))  # Token sort Ratio match

    return matches

def addMatch(match, buddy)
    if match:
    		matches.add(match)
	return matches




