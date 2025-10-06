# `dataDatabricksRecipientFederationPolicies` Submodule <a name="`dataDatabricksRecipientFederationPolicies` Submodule" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksRecipientFederationPolicies <a name="DataDatabricksRecipientFederationPolicies" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/recipient_federation_policies databricks_recipient_federation_policies}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_recipient_federation_policies

dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataDatabricksRecipientFederationPolicies resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_recipient_federation_policies

dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_recipient_federation_policies

dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_recipient_federation_policies

dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_recipient_federation_policies

dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataDatabricksRecipientFederationPolicies resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksRecipientFederationPolicies to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksRecipientFederationPolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/recipient_federation_policies#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksRecipientFederationPolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.policies">policies</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList">DataDatabricksRecipientFederationPoliciesPoliciesList</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.policies"></a>

```python
policies: DataDatabricksRecipientFederationPoliciesPoliciesList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList">DataDatabricksRecipientFederationPoliciesPoliciesList</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPolicies.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksRecipientFederationPoliciesConfig <a name="DataDatabricksRecipientFederationPoliciesConfig" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_recipient_federation_policies

dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

### DataDatabricksRecipientFederationPoliciesPolicies <a name="DataDatabricksRecipientFederationPoliciesPolicies" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPolicies.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_recipient_federation_policies

dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPolicies(
  comment: str = None,
  name: str = None,
  oidc_policy: DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicy = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPolicies.property.comment">comment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/recipient_federation_policies#comment DataDatabricksRecipientFederationPolicies#comment}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPolicies.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/recipient_federation_policies#name DataDatabricksRecipientFederationPolicies#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPolicies.property.oidcPolicy">oidc_policy</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicy">DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/recipient_federation_policies#oidc_policy DataDatabricksRecipientFederationPolicies#oidc_policy}. |

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPolicies.property.comment"></a>

```python
comment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/recipient_federation_policies#comment DataDatabricksRecipientFederationPolicies#comment}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPolicies.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/recipient_federation_policies#name DataDatabricksRecipientFederationPolicies#name}.

---

##### `oidc_policy`<sup>Optional</sup> <a name="oidc_policy" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPolicies.property.oidcPolicy"></a>

```python
oidc_policy: DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicy
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicy">DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/recipient_federation_policies#oidc_policy DataDatabricksRecipientFederationPolicies#oidc_policy}.

---

### DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicy <a name="DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicy" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_recipient_federation_policies

dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicy(
  issuer: str,
  subject: str,
  subject_claim: str,
  audiences: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicy.property.issuer">issuer</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/recipient_federation_policies#issuer DataDatabricksRecipientFederationPolicies#issuer}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicy.property.subject">subject</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/recipient_federation_policies#subject DataDatabricksRecipientFederationPolicies#subject}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicy.property.subjectClaim">subject_claim</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/recipient_federation_policies#subject_claim DataDatabricksRecipientFederationPolicies#subject_claim}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicy.property.audiences">audiences</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/recipient_federation_policies#audiences DataDatabricksRecipientFederationPolicies#audiences}. |

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicy.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/recipient_federation_policies#issuer DataDatabricksRecipientFederationPolicies#issuer}.

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicy.property.subject"></a>

```python
subject: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/recipient_federation_policies#subject DataDatabricksRecipientFederationPolicies#subject}.

---

##### `subject_claim`<sup>Required</sup> <a name="subject_claim" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicy.property.subjectClaim"></a>

```python
subject_claim: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/recipient_federation_policies#subject_claim DataDatabricksRecipientFederationPolicies#subject_claim}.

---

##### `audiences`<sup>Optional</sup> <a name="audiences" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicy.property.audiences"></a>

```python
audiences: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/recipient_federation_policies#audiences DataDatabricksRecipientFederationPolicies#audiences}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksRecipientFederationPoliciesPoliciesList <a name="DataDatabricksRecipientFederationPoliciesPoliciesList" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_recipient_federation_policies

dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksRecipientFederationPoliciesPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPolicies">DataDatabricksRecipientFederationPoliciesPolicies</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksRecipientFederationPoliciesPolicies]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPolicies">DataDatabricksRecipientFederationPoliciesPolicies</a>]

---


### DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference <a name="DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_recipient_federation_policies

dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.resetAudiences">reset_audiences</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_audiences` <a name="reset_audiences" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.resetAudiences"></a>

```python
def reset_audiences() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.property.audiencesInput">audiences_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.property.issuerInput">issuer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.property.subjectClaimInput">subject_claim_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.property.subjectInput">subject_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.property.audiences">audiences</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.property.subject">subject</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.property.subjectClaim">subject_claim</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicy">DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `audiences_input`<sup>Optional</sup> <a name="audiences_input" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.property.audiencesInput"></a>

```python
audiences_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `issuer_input`<sup>Optional</sup> <a name="issuer_input" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.property.issuerInput"></a>

```python
issuer_input: str
```

- *Type:* str

---

##### `subject_claim_input`<sup>Optional</sup> <a name="subject_claim_input" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.property.subjectClaimInput"></a>

```python
subject_claim_input: str
```

- *Type:* str

---

##### `subject_input`<sup>Optional</sup> <a name="subject_input" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.property.subjectInput"></a>

```python
subject_input: str
```

- *Type:* str

---

##### `audiences`<sup>Required</sup> <a name="audiences" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.property.audiences"></a>

```python
audiences: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.property.subject"></a>

```python
subject: str
```

- *Type:* str

---

##### `subject_claim`<sup>Required</sup> <a name="subject_claim" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.property.subjectClaim"></a>

```python
subject_claim: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicy
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicy">DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicy</a>

---


### DataDatabricksRecipientFederationPoliciesPoliciesOutputReference <a name="DataDatabricksRecipientFederationPoliciesPoliciesOutputReference" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_recipient_federation_policies

dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.putOidcPolicy">put_oidc_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.resetOidcPolicy">reset_oidc_policy</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_oidc_policy` <a name="put_oidc_policy" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.putOidcPolicy"></a>

```python
def put_oidc_policy(
  issuer: str,
  subject: str,
  subject_claim: str,
  audiences: typing.List[str] = None
) -> None
```

###### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.putOidcPolicy.parameter.issuer"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/recipient_federation_policies#issuer DataDatabricksRecipientFederationPolicies#issuer}.

---

###### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.putOidcPolicy.parameter.subject"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/recipient_federation_policies#subject DataDatabricksRecipientFederationPolicies#subject}.

---

###### `subject_claim`<sup>Required</sup> <a name="subject_claim" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.putOidcPolicy.parameter.subjectClaim"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/recipient_federation_policies#subject_claim DataDatabricksRecipientFederationPolicies#subject_claim}.

---

###### `audiences`<sup>Optional</sup> <a name="audiences" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.putOidcPolicy.parameter.audiences"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/recipient_federation_policies#audiences DataDatabricksRecipientFederationPolicies#audiences}.

---

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_oidc_policy` <a name="reset_oidc_policy" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.resetOidcPolicy"></a>

```python
def reset_oidc_policy() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.property.oidcPolicy">oidc_policy</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference">DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.property.oidcPolicyInput">oidc_policy_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicy">DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPolicies">DataDatabricksRecipientFederationPoliciesPolicies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `oidc_policy`<sup>Required</sup> <a name="oidc_policy" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.property.oidcPolicy"></a>

```python
oidc_policy: DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference">DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicyOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `oidc_policy_input`<sup>Optional</sup> <a name="oidc_policy_input" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.property.oidcPolicyInput"></a>

```python
oidc_policy_input: IResolvable | DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicy
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicy">DataDatabricksRecipientFederationPoliciesPoliciesOidcPolicy</a>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPoliciesOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksRecipientFederationPoliciesPolicies
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksRecipientFederationPolicies.DataDatabricksRecipientFederationPoliciesPolicies">DataDatabricksRecipientFederationPoliciesPolicies</a>

---



