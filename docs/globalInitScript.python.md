# `databricks_global_init_script`

Refer to the Terraform Registory for docs: [`databricks_global_init_script`](https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/resources/global_init_script).

# `globalInitScript` Submodule <a name="`globalInitScript` Submodule" id="@cdktf/provider-databricks.globalInitScript"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlobalInitScript <a name="GlobalInitScript" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/resources/global_init_script databricks_global_init_script}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import global_init_script

globalInitScript.GlobalInitScript(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  content_base64: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  md5: str = None,
  position: typing.Union[int, float] = None,
  source: str = None,
  timeouts: GlobalInitScriptTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/resources/global_init_script#name GlobalInitScript#name}. |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.Initializer.parameter.contentBase64">content_base64</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/resources/global_init_script#content_base64 GlobalInitScript#content_base64}. |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/resources/global_init_script#enabled GlobalInitScript#enabled}. |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/resources/global_init_script#id GlobalInitScript#id}. |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.Initializer.parameter.md5">md5</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/resources/global_init_script#md5 GlobalInitScript#md5}. |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.Initializer.parameter.position">position</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/resources/global_init_script#position GlobalInitScript#position}. |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.Initializer.parameter.source">source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/resources/global_init_script#source GlobalInitScript#source}. |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeouts">GlobalInitScriptTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/resources/global_init_script#name GlobalInitScript#name}.

---

##### `content_base64`<sup>Optional</sup> <a name="content_base64" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.Initializer.parameter.contentBase64"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/resources/global_init_script#content_base64 GlobalInitScript#content_base64}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/resources/global_init_script#enabled GlobalInitScript#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/resources/global_init_script#id GlobalInitScript#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `md5`<sup>Optional</sup> <a name="md5" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.Initializer.parameter.md5"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/resources/global_init_script#md5 GlobalInitScript#md5}.

---

##### `position`<sup>Optional</sup> <a name="position" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.Initializer.parameter.position"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/resources/global_init_script#position GlobalInitScript#position}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.Initializer.parameter.source"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/resources/global_init_script#source GlobalInitScript#source}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeouts">GlobalInitScriptTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/resources/global_init_script#timeouts GlobalInitScript#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.resetContentBase64">reset_content_base64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.resetMd5">reset_md5</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.resetPosition">reset_position</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.resetSource">reset_source</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.putTimeouts"></a>

```python
def put_timeouts() -> None
```

##### `reset_content_base64` <a name="reset_content_base64" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.resetContentBase64"></a>

```python
def reset_content_base64() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_md5` <a name="reset_md5" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.resetMd5"></a>

```python
def reset_md5() -> None
```

##### `reset_position` <a name="reset_position" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.resetPosition"></a>

```python
def reset_position() -> None
```

##### `reset_source` <a name="reset_source" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.resetSource"></a>

```python
def reset_source() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import global_init_script

globalInitScript.GlobalInitScript.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import global_init_script

globalInitScript.GlobalInitScript.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_databricks import global_init_script

globalInitScript.GlobalInitScript.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference">GlobalInitScriptTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.contentBase64Input">content_base64_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.md5Input">md5_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.positionInput">position_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeouts">GlobalInitScriptTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.contentBase64">content_base64</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.md5">md5</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.position">position</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.source">source</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.timeouts"></a>

```python
timeouts: GlobalInitScriptTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference">GlobalInitScriptTimeoutsOutputReference</a>

---

##### `content_base64_input`<sup>Optional</sup> <a name="content_base64_input" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.contentBase64Input"></a>

```python
content_base64_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `md5_input`<sup>Optional</sup> <a name="md5_input" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.md5Input"></a>

```python
md5_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `position_input`<sup>Optional</sup> <a name="position_input" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.positionInput"></a>

```python
position_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GlobalInitScriptTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeouts">GlobalInitScriptTimeouts</a>]

---

##### `content_base64`<sup>Required</sup> <a name="content_base64" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.contentBase64"></a>

```python
content_base64: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `md5`<sup>Required</sup> <a name="md5" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.md5"></a>

```python
md5: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.position"></a>

```python
position: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.source"></a>

```python
source: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GlobalInitScriptConfig <a name="GlobalInitScriptConfig" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import global_init_script

globalInitScript.GlobalInitScriptConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  content_base64: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  md5: str = None,
  position: typing.Union[int, float] = None,
  source: str = None,
  timeouts: GlobalInitScriptTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/resources/global_init_script#name GlobalInitScript#name}. |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.contentBase64">content_base64</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/resources/global_init_script#content_base64 GlobalInitScript#content_base64}. |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/resources/global_init_script#enabled GlobalInitScript#enabled}. |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/resources/global_init_script#id GlobalInitScript#id}. |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.md5">md5</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/resources/global_init_script#md5 GlobalInitScript#md5}. |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.position">position</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/resources/global_init_script#position GlobalInitScript#position}. |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.source">source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/resources/global_init_script#source GlobalInitScript#source}. |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeouts">GlobalInitScriptTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/resources/global_init_script#name GlobalInitScript#name}.

---

##### `content_base64`<sup>Optional</sup> <a name="content_base64" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.contentBase64"></a>

```python
content_base64: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/resources/global_init_script#content_base64 GlobalInitScript#content_base64}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/resources/global_init_script#enabled GlobalInitScript#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/resources/global_init_script#id GlobalInitScript#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `md5`<sup>Optional</sup> <a name="md5" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.md5"></a>

```python
md5: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/resources/global_init_script#md5 GlobalInitScript#md5}.

---

##### `position`<sup>Optional</sup> <a name="position" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.position"></a>

```python
position: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/resources/global_init_script#position GlobalInitScript#position}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.source"></a>

```python
source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/resources/global_init_script#source GlobalInitScript#source}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.timeouts"></a>

```python
timeouts: GlobalInitScriptTimeouts
```

- *Type:* <a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeouts">GlobalInitScriptTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/resources/global_init_script#timeouts GlobalInitScript#timeouts}

---

### GlobalInitScriptTimeouts <a name="GlobalInitScriptTimeouts" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import global_init_script

globalInitScript.GlobalInitScriptTimeouts()
```


## Classes <a name="Classes" id="Classes"></a>

### GlobalInitScriptTimeoutsOutputReference <a name="GlobalInitScriptTimeoutsOutputReference" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import global_init_script

globalInitScript.GlobalInitScriptTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeouts">GlobalInitScriptTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GlobalInitScriptTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeouts">GlobalInitScriptTimeouts</a>]

---



