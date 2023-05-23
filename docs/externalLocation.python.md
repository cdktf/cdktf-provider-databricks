# `databricks_external_location`

Refer to the Terraform Registory for docs: [`databricks_external_location`](https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/external_location).

# `externalLocation` Submodule <a name="`externalLocation` Submodule" id="@cdktf/provider-databricks.externalLocation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ExternalLocation <a name="ExternalLocation" id="@cdktf/provider-databricks.externalLocation.ExternalLocation"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/external_location databricks_external_location}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import external_location

externalLocation.ExternalLocation(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  credential_name: str,
  name: str,
  url: str,
  comment: str = None,
  id: str = None,
  metastore_id: str = None,
  owner: str = None,
  skip_validation: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.credentialName">credential_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/external_location#credential_name ExternalLocation#credential_name}. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/external_location#name ExternalLocation#name}. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.url">url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/external_location#url ExternalLocation#url}. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.comment">comment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/external_location#comment ExternalLocation#comment}. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/external_location#id ExternalLocation#id}. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.metastoreId">metastore_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/external_location#metastore_id ExternalLocation#metastore_id}. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.owner">owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/external_location#owner ExternalLocation#owner}. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.skipValidation">skip_validation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/external_location#skip_validation ExternalLocation#skip_validation}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `credential_name`<sup>Required</sup> <a name="credential_name" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.credentialName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/external_location#credential_name ExternalLocation#credential_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/external_location#name ExternalLocation#name}.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.url"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/external_location#url ExternalLocation#url}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.comment"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/external_location#comment ExternalLocation#comment}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/external_location#id ExternalLocation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metastore_id`<sup>Optional</sup> <a name="metastore_id" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.metastoreId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/external_location#metastore_id ExternalLocation#metastore_id}.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.owner"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/external_location#owner ExternalLocation#owner}.

---

##### `skip_validation`<sup>Optional</sup> <a name="skip_validation" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.skipValidation"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/external_location#skip_validation ExternalLocation#skip_validation}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.resetMetastoreId">reset_metastore_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.resetOwner">reset_owner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.resetSkipValidation">reset_skip_validation</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_metastore_id` <a name="reset_metastore_id" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.resetMetastoreId"></a>

```python
def reset_metastore_id() -> None
```

##### `reset_owner` <a name="reset_owner" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.resetOwner"></a>

```python
def reset_owner() -> None
```

##### `reset_skip_validation` <a name="reset_skip_validation" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.resetSkipValidation"></a>

```python
def reset_skip_validation() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import external_location

externalLocation.ExternalLocation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import external_location

externalLocation.ExternalLocation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_databricks import external_location

externalLocation.ExternalLocation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.credentialNameInput">credential_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.metastoreIdInput">metastore_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.ownerInput">owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.skipValidationInput">skip_validation_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.credentialName">credential_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.metastoreId">metastore_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.skipValidation">skip_validation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.url">url</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `credential_name_input`<sup>Optional</sup> <a name="credential_name_input" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.credentialNameInput"></a>

```python
credential_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `metastore_id_input`<sup>Optional</sup> <a name="metastore_id_input" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.metastoreIdInput"></a>

```python
metastore_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `owner_input`<sup>Optional</sup> <a name="owner_input" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.ownerInput"></a>

```python
owner_input: str
```

- *Type:* str

---

##### `skip_validation_input`<sup>Optional</sup> <a name="skip_validation_input" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.skipValidationInput"></a>

```python
skip_validation_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `credential_name`<sup>Required</sup> <a name="credential_name" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.credentialName"></a>

```python
credential_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `metastore_id`<sup>Required</sup> <a name="metastore_id" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.metastoreId"></a>

```python
metastore_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `skip_validation`<sup>Required</sup> <a name="skip_validation" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.skipValidation"></a>

```python
skip_validation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.url"></a>

```python
url: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ExternalLocationConfig <a name="ExternalLocationConfig" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import external_location

externalLocation.ExternalLocationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  credential_name: str,
  name: str,
  url: str,
  comment: str = None,
  id: str = None,
  metastore_id: str = None,
  owner: str = None,
  skip_validation: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.credentialName">credential_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/external_location#credential_name ExternalLocation#credential_name}. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/external_location#name ExternalLocation#name}. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.url">url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/external_location#url ExternalLocation#url}. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.comment">comment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/external_location#comment ExternalLocation#comment}. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/external_location#id ExternalLocation#id}. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.metastoreId">metastore_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/external_location#metastore_id ExternalLocation#metastore_id}. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.owner">owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/external_location#owner ExternalLocation#owner}. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.skipValidation">skip_validation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/external_location#skip_validation ExternalLocation#skip_validation}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `credential_name`<sup>Required</sup> <a name="credential_name" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.credentialName"></a>

```python
credential_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/external_location#credential_name ExternalLocation#credential_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/external_location#name ExternalLocation#name}.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.url"></a>

```python
url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/external_location#url ExternalLocation#url}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/external_location#comment ExternalLocation#comment}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/external_location#id ExternalLocation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metastore_id`<sup>Optional</sup> <a name="metastore_id" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.metastoreId"></a>

```python
metastore_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/external_location#metastore_id ExternalLocation#metastore_id}.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.owner"></a>

```python
owner: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/external_location#owner ExternalLocation#owner}.

---

##### `skip_validation`<sup>Optional</sup> <a name="skip_validation" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.skipValidation"></a>

```python
skip_validation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.17.0/docs/resources/external_location#skip_validation ExternalLocation#skip_validation}.

---



