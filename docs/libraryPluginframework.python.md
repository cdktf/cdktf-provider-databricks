# `libraryPluginframework` Submodule <a name="`libraryPluginframework` Submodule" id="@cdktf/provider-databricks.libraryPluginframework"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LibraryPluginframework <a name="LibraryPluginframework" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/library_pluginframework databricks_library_pluginframework}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import library_pluginframework

libraryPluginframework.LibraryPluginframework(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_id: str,
  cran: typing.Union[IResolvable, typing.List[LibraryPluginframeworkCran]] = None,
  egg: str = None,
  jar: str = None,
  maven: typing.Union[IResolvable, typing.List[LibraryPluginframeworkMaven]] = None,
  pypi: typing.Union[IResolvable, typing.List[LibraryPluginframeworkPypi]] = None,
  requirements: str = None,
  whl: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer.parameter.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/library_pluginframework#cluster_id LibraryPluginframework#cluster_id}. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer.parameter.cran">cran</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCran">LibraryPluginframeworkCran</a>]]</code> | cran block. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer.parameter.egg">egg</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/library_pluginframework#egg LibraryPluginframework#egg}. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer.parameter.jar">jar</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/library_pluginframework#jar LibraryPluginframework#jar}. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer.parameter.maven">maven</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMaven">LibraryPluginframeworkMaven</a>]]</code> | maven block. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer.parameter.pypi">pypi</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypi">LibraryPluginframeworkPypi</a>]]</code> | pypi block. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer.parameter.requirements">requirements</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/library_pluginframework#requirements LibraryPluginframework#requirements}. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer.parameter.whl">whl</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/library_pluginframework#whl LibraryPluginframework#whl}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer.parameter.clusterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/library_pluginframework#cluster_id LibraryPluginframework#cluster_id}.

---

##### `cran`<sup>Optional</sup> <a name="cran" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer.parameter.cran"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCran">LibraryPluginframeworkCran</a>]]

cran block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/library_pluginframework#cran LibraryPluginframework#cran}

---

##### `egg`<sup>Optional</sup> <a name="egg" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer.parameter.egg"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/library_pluginframework#egg LibraryPluginframework#egg}.

---

##### `jar`<sup>Optional</sup> <a name="jar" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer.parameter.jar"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/library_pluginframework#jar LibraryPluginframework#jar}.

---

##### `maven`<sup>Optional</sup> <a name="maven" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer.parameter.maven"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMaven">LibraryPluginframeworkMaven</a>]]

maven block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/library_pluginframework#maven LibraryPluginframework#maven}

---

##### `pypi`<sup>Optional</sup> <a name="pypi" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer.parameter.pypi"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypi">LibraryPluginframeworkPypi</a>]]

pypi block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/library_pluginframework#pypi LibraryPluginframework#pypi}

---

##### `requirements`<sup>Optional</sup> <a name="requirements" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer.parameter.requirements"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/library_pluginframework#requirements LibraryPluginframework#requirements}.

---

##### `whl`<sup>Optional</sup> <a name="whl" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer.parameter.whl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/library_pluginframework#whl LibraryPluginframework#whl}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.putCran">put_cran</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.putMaven">put_maven</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.putPypi">put_pypi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.resetCran">reset_cran</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.resetEgg">reset_egg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.resetJar">reset_jar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.resetMaven">reset_maven</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.resetPypi">reset_pypi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.resetRequirements">reset_requirements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.resetWhl">reset_whl</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_cran` <a name="put_cran" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.putCran"></a>

```python
def put_cran(
  value: typing.Union[IResolvable, typing.List[LibraryPluginframeworkCran]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.putCran.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCran">LibraryPluginframeworkCran</a>]]

---

##### `put_maven` <a name="put_maven" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.putMaven"></a>

```python
def put_maven(
  value: typing.Union[IResolvable, typing.List[LibraryPluginframeworkMaven]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.putMaven.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMaven">LibraryPluginframeworkMaven</a>]]

---

##### `put_pypi` <a name="put_pypi" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.putPypi"></a>

```python
def put_pypi(
  value: typing.Union[IResolvable, typing.List[LibraryPluginframeworkPypi]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.putPypi.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypi">LibraryPluginframeworkPypi</a>]]

---

##### `reset_cran` <a name="reset_cran" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.resetCran"></a>

```python
def reset_cran() -> None
```

##### `reset_egg` <a name="reset_egg" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.resetEgg"></a>

```python
def reset_egg() -> None
```

##### `reset_jar` <a name="reset_jar" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.resetJar"></a>

```python
def reset_jar() -> None
```

##### `reset_maven` <a name="reset_maven" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.resetMaven"></a>

```python
def reset_maven() -> None
```

##### `reset_pypi` <a name="reset_pypi" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.resetPypi"></a>

```python
def reset_pypi() -> None
```

##### `reset_requirements` <a name="reset_requirements" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.resetRequirements"></a>

```python
def reset_requirements() -> None
```

##### `reset_whl` <a name="reset_whl" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.resetWhl"></a>

```python
def reset_whl() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a LibraryPluginframework resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import library_pluginframework

libraryPluginframework.LibraryPluginframework.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import library_pluginframework

libraryPluginframework.LibraryPluginframework.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_databricks import library_pluginframework

libraryPluginframework.LibraryPluginframework.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import library_pluginframework

libraryPluginframework.LibraryPluginframework.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a LibraryPluginframework resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LibraryPluginframework to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LibraryPluginframework that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/library_pluginframework#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LibraryPluginframework to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.cran">cran</a></code> | <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList">LibraryPluginframeworkCranList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.maven">maven</a></code> | <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList">LibraryPluginframeworkMavenList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.pypi">pypi</a></code> | <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList">LibraryPluginframeworkPypiList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.clusterIdInput">cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.cranInput">cran_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCran">LibraryPluginframeworkCran</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.eggInput">egg_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.jarInput">jar_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.mavenInput">maven_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMaven">LibraryPluginframeworkMaven</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.pypiInput">pypi_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypi">LibraryPluginframeworkPypi</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.requirementsInput">requirements_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.whlInput">whl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.clusterId">cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.egg">egg</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.jar">jar</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.requirements">requirements</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.whl">whl</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cran`<sup>Required</sup> <a name="cran" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.cran"></a>

```python
cran: LibraryPluginframeworkCranList
```

- *Type:* <a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList">LibraryPluginframeworkCranList</a>

---

##### `maven`<sup>Required</sup> <a name="maven" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.maven"></a>

```python
maven: LibraryPluginframeworkMavenList
```

- *Type:* <a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList">LibraryPluginframeworkMavenList</a>

---

##### `pypi`<sup>Required</sup> <a name="pypi" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.pypi"></a>

```python
pypi: LibraryPluginframeworkPypiList
```

- *Type:* <a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList">LibraryPluginframeworkPypiList</a>

---

##### `cluster_id_input`<sup>Optional</sup> <a name="cluster_id_input" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.clusterIdInput"></a>

```python
cluster_id_input: str
```

- *Type:* str

---

##### `cran_input`<sup>Optional</sup> <a name="cran_input" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.cranInput"></a>

```python
cran_input: typing.Union[IResolvable, typing.List[LibraryPluginframeworkCran]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCran">LibraryPluginframeworkCran</a>]]

---

##### `egg_input`<sup>Optional</sup> <a name="egg_input" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.eggInput"></a>

```python
egg_input: str
```

- *Type:* str

---

##### `jar_input`<sup>Optional</sup> <a name="jar_input" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.jarInput"></a>

```python
jar_input: str
```

- *Type:* str

---

##### `maven_input`<sup>Optional</sup> <a name="maven_input" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.mavenInput"></a>

```python
maven_input: typing.Union[IResolvable, typing.List[LibraryPluginframeworkMaven]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMaven">LibraryPluginframeworkMaven</a>]]

---

##### `pypi_input`<sup>Optional</sup> <a name="pypi_input" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.pypiInput"></a>

```python
pypi_input: typing.Union[IResolvable, typing.List[LibraryPluginframeworkPypi]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypi">LibraryPluginframeworkPypi</a>]]

---

##### `requirements_input`<sup>Optional</sup> <a name="requirements_input" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.requirementsInput"></a>

```python
requirements_input: str
```

- *Type:* str

---

##### `whl_input`<sup>Optional</sup> <a name="whl_input" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.whlInput"></a>

```python
whl_input: str
```

- *Type:* str

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

---

##### `egg`<sup>Required</sup> <a name="egg" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.egg"></a>

```python
egg: str
```

- *Type:* str

---

##### `jar`<sup>Required</sup> <a name="jar" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.jar"></a>

```python
jar: str
```

- *Type:* str

---

##### `requirements`<sup>Required</sup> <a name="requirements" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.requirements"></a>

```python
requirements: str
```

- *Type:* str

---

##### `whl`<sup>Required</sup> <a name="whl" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.whl"></a>

```python
whl: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LibraryPluginframeworkConfig <a name="LibraryPluginframeworkConfig" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import library_pluginframework

libraryPluginframework.LibraryPluginframeworkConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_id: str,
  cran: typing.Union[IResolvable, typing.List[LibraryPluginframeworkCran]] = None,
  egg: str = None,
  jar: str = None,
  maven: typing.Union[IResolvable, typing.List[LibraryPluginframeworkMaven]] = None,
  pypi: typing.Union[IResolvable, typing.List[LibraryPluginframeworkPypi]] = None,
  requirements: str = None,
  whl: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/library_pluginframework#cluster_id LibraryPluginframework#cluster_id}. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.cran">cran</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCran">LibraryPluginframeworkCran</a>]]</code> | cran block. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.egg">egg</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/library_pluginframework#egg LibraryPluginframework#egg}. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.jar">jar</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/library_pluginframework#jar LibraryPluginframework#jar}. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.maven">maven</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMaven">LibraryPluginframeworkMaven</a>]]</code> | maven block. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.pypi">pypi</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypi">LibraryPluginframeworkPypi</a>]]</code> | pypi block. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.requirements">requirements</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/library_pluginframework#requirements LibraryPluginframework#requirements}. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.whl">whl</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/library_pluginframework#whl LibraryPluginframework#whl}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/library_pluginframework#cluster_id LibraryPluginframework#cluster_id}.

---

##### `cran`<sup>Optional</sup> <a name="cran" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.cran"></a>

```python
cran: typing.Union[IResolvable, typing.List[LibraryPluginframeworkCran]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCran">LibraryPluginframeworkCran</a>]]

cran block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/library_pluginframework#cran LibraryPluginframework#cran}

---

##### `egg`<sup>Optional</sup> <a name="egg" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.egg"></a>

```python
egg: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/library_pluginframework#egg LibraryPluginframework#egg}.

---

##### `jar`<sup>Optional</sup> <a name="jar" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.jar"></a>

```python
jar: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/library_pluginframework#jar LibraryPluginframework#jar}.

---

##### `maven`<sup>Optional</sup> <a name="maven" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.maven"></a>

```python
maven: typing.Union[IResolvable, typing.List[LibraryPluginframeworkMaven]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMaven">LibraryPluginframeworkMaven</a>]]

maven block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/library_pluginframework#maven LibraryPluginframework#maven}

---

##### `pypi`<sup>Optional</sup> <a name="pypi" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.pypi"></a>

```python
pypi: typing.Union[IResolvable, typing.List[LibraryPluginframeworkPypi]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypi">LibraryPluginframeworkPypi</a>]]

pypi block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/library_pluginframework#pypi LibraryPluginframework#pypi}

---

##### `requirements`<sup>Optional</sup> <a name="requirements" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.requirements"></a>

```python
requirements: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/library_pluginframework#requirements LibraryPluginframework#requirements}.

---

##### `whl`<sup>Optional</sup> <a name="whl" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.whl"></a>

```python
whl: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/library_pluginframework#whl LibraryPluginframework#whl}.

---

### LibraryPluginframeworkCran <a name="LibraryPluginframeworkCran" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCran"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCran.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import library_pluginframework

libraryPluginframework.LibraryPluginframeworkCran(
  package: str,
  repo: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCran.property.package">package</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/library_pluginframework#package LibraryPluginframework#package}. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCran.property.repo">repo</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/library_pluginframework#repo LibraryPluginframework#repo}. |

---

##### `package`<sup>Required</sup> <a name="package" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCran.property.package"></a>

```python
package: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/library_pluginframework#package LibraryPluginframework#package}.

---

##### `repo`<sup>Optional</sup> <a name="repo" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCran.property.repo"></a>

```python
repo: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/library_pluginframework#repo LibraryPluginframework#repo}.

---

### LibraryPluginframeworkMaven <a name="LibraryPluginframeworkMaven" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMaven"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMaven.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import library_pluginframework

libraryPluginframework.LibraryPluginframeworkMaven(
  coordinates: str,
  exclusions: typing.List[str] = None,
  repo: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMaven.property.coordinates">coordinates</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/library_pluginframework#coordinates LibraryPluginframework#coordinates}. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMaven.property.exclusions">exclusions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/library_pluginframework#exclusions LibraryPluginframework#exclusions}. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMaven.property.repo">repo</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/library_pluginframework#repo LibraryPluginframework#repo}. |

---

##### `coordinates`<sup>Required</sup> <a name="coordinates" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMaven.property.coordinates"></a>

```python
coordinates: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/library_pluginframework#coordinates LibraryPluginframework#coordinates}.

---

##### `exclusions`<sup>Optional</sup> <a name="exclusions" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMaven.property.exclusions"></a>

```python
exclusions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/library_pluginframework#exclusions LibraryPluginframework#exclusions}.

---

##### `repo`<sup>Optional</sup> <a name="repo" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMaven.property.repo"></a>

```python
repo: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/library_pluginframework#repo LibraryPluginframework#repo}.

---

### LibraryPluginframeworkPypi <a name="LibraryPluginframeworkPypi" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypi"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypi.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import library_pluginframework

libraryPluginframework.LibraryPluginframeworkPypi(
  package: str,
  repo: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypi.property.package">package</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/library_pluginframework#package LibraryPluginframework#package}. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypi.property.repo">repo</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/library_pluginframework#repo LibraryPluginframework#repo}. |

---

##### `package`<sup>Required</sup> <a name="package" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypi.property.package"></a>

```python
package: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/library_pluginframework#package LibraryPluginframework#package}.

---

##### `repo`<sup>Optional</sup> <a name="repo" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypi.property.repo"></a>

```python
repo: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/library_pluginframework#repo LibraryPluginframework#repo}.

---

## Classes <a name="Classes" id="Classes"></a>

### LibraryPluginframeworkCranList <a name="LibraryPluginframeworkCranList" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import library_pluginframework

libraryPluginframework.LibraryPluginframeworkCranList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LibraryPluginframeworkCranOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCran">LibraryPluginframeworkCran</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LibraryPluginframeworkCran]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCran">LibraryPluginframeworkCran</a>]]

---


### LibraryPluginframeworkCranOutputReference <a name="LibraryPluginframeworkCranOutputReference" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import library_pluginframework

libraryPluginframework.LibraryPluginframeworkCranOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.resetRepo">reset_repo</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_repo` <a name="reset_repo" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.resetRepo"></a>

```python
def reset_repo() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.property.packageInput">package_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.property.repoInput">repo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.property.package">package</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.property.repo">repo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCran">LibraryPluginframeworkCran</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `package_input`<sup>Optional</sup> <a name="package_input" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.property.packageInput"></a>

```python
package_input: str
```

- *Type:* str

---

##### `repo_input`<sup>Optional</sup> <a name="repo_input" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.property.repoInput"></a>

```python
repo_input: str
```

- *Type:* str

---

##### `package`<sup>Required</sup> <a name="package" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.property.package"></a>

```python
package: str
```

- *Type:* str

---

##### `repo`<sup>Required</sup> <a name="repo" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.property.repo"></a>

```python
repo: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LibraryPluginframeworkCran]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCran">LibraryPluginframeworkCran</a>]

---


### LibraryPluginframeworkMavenList <a name="LibraryPluginframeworkMavenList" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import library_pluginframework

libraryPluginframework.LibraryPluginframeworkMavenList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LibraryPluginframeworkMavenOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMaven">LibraryPluginframeworkMaven</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LibraryPluginframeworkMaven]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMaven">LibraryPluginframeworkMaven</a>]]

---


### LibraryPluginframeworkMavenOutputReference <a name="LibraryPluginframeworkMavenOutputReference" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import library_pluginframework

libraryPluginframework.LibraryPluginframeworkMavenOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.resetExclusions">reset_exclusions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.resetRepo">reset_repo</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_exclusions` <a name="reset_exclusions" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.resetExclusions"></a>

```python
def reset_exclusions() -> None
```

##### `reset_repo` <a name="reset_repo" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.resetRepo"></a>

```python
def reset_repo() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.coordinatesInput">coordinates_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.exclusionsInput">exclusions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.repoInput">repo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.coordinates">coordinates</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.exclusions">exclusions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.repo">repo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMaven">LibraryPluginframeworkMaven</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `coordinates_input`<sup>Optional</sup> <a name="coordinates_input" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.coordinatesInput"></a>

```python
coordinates_input: str
```

- *Type:* str

---

##### `exclusions_input`<sup>Optional</sup> <a name="exclusions_input" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.exclusionsInput"></a>

```python
exclusions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `repo_input`<sup>Optional</sup> <a name="repo_input" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.repoInput"></a>

```python
repo_input: str
```

- *Type:* str

---

##### `coordinates`<sup>Required</sup> <a name="coordinates" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.coordinates"></a>

```python
coordinates: str
```

- *Type:* str

---

##### `exclusions`<sup>Required</sup> <a name="exclusions" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.exclusions"></a>

```python
exclusions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `repo`<sup>Required</sup> <a name="repo" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.repo"></a>

```python
repo: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LibraryPluginframeworkMaven]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMaven">LibraryPluginframeworkMaven</a>]

---


### LibraryPluginframeworkPypiList <a name="LibraryPluginframeworkPypiList" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import library_pluginframework

libraryPluginframework.LibraryPluginframeworkPypiList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LibraryPluginframeworkPypiOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypi">LibraryPluginframeworkPypi</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LibraryPluginframeworkPypi]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypi">LibraryPluginframeworkPypi</a>]]

---


### LibraryPluginframeworkPypiOutputReference <a name="LibraryPluginframeworkPypiOutputReference" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import library_pluginframework

libraryPluginframework.LibraryPluginframeworkPypiOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.resetRepo">reset_repo</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_repo` <a name="reset_repo" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.resetRepo"></a>

```python
def reset_repo() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.property.packageInput">package_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.property.repoInput">repo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.property.package">package</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.property.repo">repo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypi">LibraryPluginframeworkPypi</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `package_input`<sup>Optional</sup> <a name="package_input" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.property.packageInput"></a>

```python
package_input: str
```

- *Type:* str

---

##### `repo_input`<sup>Optional</sup> <a name="repo_input" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.property.repoInput"></a>

```python
repo_input: str
```

- *Type:* str

---

##### `package`<sup>Required</sup> <a name="package" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.property.package"></a>

```python
package: str
```

- *Type:* str

---

##### `repo`<sup>Required</sup> <a name="repo" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.property.repo"></a>

```python
repo: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LibraryPluginframeworkPypi]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypi">LibraryPluginframeworkPypi</a>]

---



