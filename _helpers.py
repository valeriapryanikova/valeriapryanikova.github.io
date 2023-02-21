
# just so i dont need to manually resize stuff

from os import listdir, path
from PIL import Image
from filedate import File

drawings_path = 'static/drawings/lores/'
hires_path = 'static/drawings/hires/'
width, height = 720, 1080

def resize_drawings():
    listdir_drawings = listdir(drawings_path)
    for f in listdir(hires_path):
        if f not in listdir_drawings:
            orig_date = path.getmtime(hires_path+f)
            img = Image.open(hires_path+f)
            if img.size[0]>width or img.size[1]>height:
                img.thumbnail((width, height))
                img.save(drawings_path+f)
                File(drawings_path+f).set(modified=orig_date)
    print('resize_drawings() done')
    return

def check_resize():
    for f in listdir(drawings_path):
        if f[-3:]=='png':
            orig_date = path.getmtime(drawings_path+f)
            img = Image.open(drawings_path+f)
            if img.size[0]>width or img.size[1]>height:
                img.thumbnail((width, height))
                img.save(drawings_path+f)
                File(drawings_path+f).set(modified=orig_date)
    print('check_resize() done')
    return


# resize_drawings()
# check_resize()
