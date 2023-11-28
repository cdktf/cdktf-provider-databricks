# `defaultNamespaceSettings` Submodule <a name="`defaultNamespaceSettings` Submodule" id="@cdktf/provider-databricks.defaultNamespaceSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DefaultNamespaceSettings <a name="DefaultNamespaceSettings" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/default_namespace_settings databricks_default_namespace_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import default_namespace_settings

defaultNamespaceSettings.DefaultNamespaceSettings(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  namespace: DefaultNamespaceSettingsNamespace,
  etag: str = None,
  id: str = None,
  setting_name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.Initializer.parameter.namespace">namespace</a></code> | <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespace">DefaultNamespaceSettingsNamespace</a></code> | namespace block. |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.Initializer.parameter.etag">etag</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/default_namespace_settings#etag DefaultNamespaceSettings#etag}. |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/default_namespace_settings#id DefaultNamespaceSettings#id}. |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.Initializer.parameter.settingName">setting_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/default_namespace_settings#setting_name DefaultNamespaceSettings#setting_name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.Initializer.parameter.namespace"></a>

- *Type:* <a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespace">DefaultNamespaceSettingsNamespace</a>

namespace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/default_namespace_settings#namespace DefaultNamespaceSettings#namespace}

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.Initializer.parameter.etag"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/default_namespace_settings#etag DefaultNamespaceSettings#etag}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/default_namespace_settings#id DefaultNamespaceSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `setting_name`<sup>Optional</sup> <a name="setting_name" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.Initializer.parameter.settingName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/default_namespace_settings#setting_name DefaultNamespaceSettings#setting_name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.putNamespace">put_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.resetEtag">reset_etag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.resetSettingName">reset_setting_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `put_namespace` <a name="put_namespace" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.putNamespace"></a>

```python
def put_namespace(
  value: str = None
) -> None
```

###### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.putNamespace.parameter.value"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/default_namespace_settings#value DefaultNamespaceSettings#value}.

---

##### `reset_etag` <a name="reset_etag" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.resetEtag"></a>

```python
def reset_etag() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_setting_name` <a name="reset_setting_name" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.resetSettingName"></a>

```python
def reset_setting_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DefaultNamespaceSettings resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import default_namespace_settings

defaultNamespaceSettings.DefaultNamespaceSettings.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import default_namespace_settings

defaultNamespaceSettings.DefaultNamespaceSettings.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_databricks import default_namespace_settings

defaultNamespaceSettings.DefaultNamespaceSettings.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import default_namespace_settings

defaultNamespaceSettings.DefaultNamespaceSettings.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DefaultNamespaceSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DefaultNamespaceSettings to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DefaultNamespaceSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/default_namespace_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DefaultNamespaceSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.namespace">namespace</a></code> | <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference">DefaultNamespaceSettingsNamespaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.etagInput">etag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.namespaceInput">namespace_input</a></code> | <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespace">DefaultNamespaceSettingsNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.settingNameInput">setting_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.settingName">setting_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.namespace"></a>

```python
namespace: DefaultNamespaceSettingsNamespaceOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference">DefaultNamespaceSettingsNamespaceOutputReference</a>

---

##### `etag_input`<sup>Optional</sup> <a name="etag_input" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.etagInput"></a>

```python
etag_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.namespaceInput"></a>

```python
namespace_input: DefaultNamespaceSettingsNamespace
```

- *Type:* <a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespace">DefaultNamespaceSettingsNamespace</a>

---

##### `setting_name_input`<sup>Optional</sup> <a name="setting_name_input" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.settingNameInput"></a>

```python
setting_name_input: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `setting_name`<sup>Required</sup> <a name="setting_name" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.settingName"></a>

```python
setting_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DefaultNamespaceSettingsConfig <a name="DefaultNamespaceSettingsConfig" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import default_namespace_settings

defaultNamespaceSettings.DefaultNamespaceSettingsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  namespace: DefaultNamespaceSettingsNamespace,
  etag: str = None,
  id: str = None,
  setting_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsConfig.property.namespace">namespace</a></code> | <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespace">DefaultNamespaceSettingsNamespace</a></code> | namespace block. |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsConfig.property.etag">etag</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/default_namespace_settings#etag DefaultNamespaceSettings#etag}. |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/default_namespace_settings#id DefaultNamespaceSettings#id}. |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsConfig.property.settingName">setting_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/default_namespace_settings#setting_name DefaultNamespaceSettings#setting_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsConfig.property.namespace"></a>

```python
namespace: DefaultNamespaceSettingsNamespace
```

- *Type:* <a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespace">DefaultNamespaceSettingsNamespace</a>

namespace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/default_namespace_settings#namespace DefaultNamespaceSettings#namespace}

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsConfig.property.etag"></a>

```python
etag: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/default_namespace_settings#etag DefaultNamespaceSettings#etag}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/default_namespace_settings#id DefaultNamespaceSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `setting_name`<sup>Optional</sup> <a name="setting_name" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsConfig.property.settingName"></a>

```python
setting_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/default_namespace_settings#setting_name DefaultNamespaceSettings#setting_name}.

---

### DefaultNamespaceSettingsNamespace <a name="DefaultNamespaceSettingsNamespace" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespace.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import default_namespace_settings

defaultNamespaceSettings.DefaultNamespaceSettingsNamespace(
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespace.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/default_namespace_settings#value DefaultNamespaceSettings#value}. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespace.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/default_namespace_settings#value DefaultNamespaceSettings#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DefaultNamespaceSettingsNamespaceOutputReference <a name="DefaultNamespaceSettingsNamespaceOutputReference" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import default_namespace_settings

defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_value` <a name="reset_value" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespace">DefaultNamespaceSettingsNamespace</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.property.internalValue"></a>

```python
internal_value: DefaultNamespaceSettingsNamespace
```

- *Type:* <a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespace">DefaultNamespaceSettingsNamespace</a>

---



