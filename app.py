import os
from flask import Flask, send_from_directory
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS

app = Flask(__name__, static_folder='my-app/build', static_url_path='/')
CORS(app)  # comment this on deployment
# api = Api(app)


@app.route("/", defaults={'path': ''})
def serve(path):
    return send_from_directory(app.static_folder, 'index.html')


if __name__ == "__main__":
    app.debug = True
    app.run(host='0.0.0.0', port=5000)
