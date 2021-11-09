from flask import Flask, jsonify
from flask.helpers import send_from_directory
#from flask_cors import CORS for local test

app = Flask(__name__, static_folder="frontend/build", static_url_path="")

# CORS(app) for local test

@app.route('/<string:name>',methods=['GET'])
def hello_world(name):  # put my group names in as a "database"
    if name=='Rafid':
        return jsonify(
            status=200,
            message="Hasan"
        )
    else:
        return jsonify(
            status=404,
            message="User Not Found"
        )

@app.route("/")
def index():
    return send_from_directory(app.static_folder, "index.html")

if __name__ == '__main__':
    app.run(host="0.0.0.0")
