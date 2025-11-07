# `dataDatabricksAccountNetworkPolicy` Submodule <a name="`dataDatabricksAccountNetworkPolicy` Submodule" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAccountNetworkPolicy <a name="DataDatabricksAccountNetworkPolicy" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/account_network_policy databricks_account_network_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_account_network_policy

dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  network_policy_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.Initializer.parameter.networkPolicyId">network_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/account_network_policy#network_policy_id DataDatabricksAccountNetworkPolicy#network_policy_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `network_policy_id`<sup>Required</sup> <a name="network_policy_id" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.Initializer.parameter.networkPolicyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/account_network_policy#network_policy_id DataDatabricksAccountNetworkPolicy#network_policy_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataDatabricksAccountNetworkPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_account_network_policy

dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_account_network_policy

dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_account_network_policy

dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_account_network_policy

dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataDatabricksAccountNetworkPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksAccountNetworkPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksAccountNetworkPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/account_network_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksAccountNetworkPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.property.egress">egress</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressOutputReference">DataDatabricksAccountNetworkPolicyEgressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.property.networkPolicyIdInput">network_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.property.networkPolicyId">network_policy_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `egress`<sup>Required</sup> <a name="egress" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.property.egress"></a>

```python
egress: DataDatabricksAccountNetworkPolicyEgressOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressOutputReference">DataDatabricksAccountNetworkPolicyEgressOutputReference</a>

---

##### `network_policy_id_input`<sup>Optional</sup> <a name="network_policy_id_input" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.property.networkPolicyIdInput"></a>

```python
network_policy_id_input: str
```

- *Type:* str

---

##### `network_policy_id`<sup>Required</sup> <a name="network_policy_id" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.property.networkPolicyId"></a>

```python
network_policy_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAccountNetworkPolicyConfig <a name="DataDatabricksAccountNetworkPolicyConfig" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_account_network_policy

dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  network_policy_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyConfig.property.networkPolicyId">network_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/account_network_policy#network_policy_id DataDatabricksAccountNetworkPolicy#network_policy_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `network_policy_id`<sup>Required</sup> <a name="network_policy_id" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyConfig.property.networkPolicyId"></a>

```python
network_policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/account_network_policy#network_policy_id DataDatabricksAccountNetworkPolicy#network_policy_id}.

---

### DataDatabricksAccountNetworkPolicyEgress <a name="DataDatabricksAccountNetworkPolicyEgress" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgress.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_account_network_policy

dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgress(
  network_access: DataDatabricksAccountNetworkPolicyEgressNetworkAccess = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgress.property.networkAccess">network_access</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccess">DataDatabricksAccountNetworkPolicyEgressNetworkAccess</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/account_network_policy#network_access DataDatabricksAccountNetworkPolicy#network_access}. |

---

##### `network_access`<sup>Optional</sup> <a name="network_access" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgress.property.networkAccess"></a>

```python
network_access: DataDatabricksAccountNetworkPolicyEgressNetworkAccess
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccess">DataDatabricksAccountNetworkPolicyEgressNetworkAccess</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/account_network_policy#network_access DataDatabricksAccountNetworkPolicy#network_access}.

---

### DataDatabricksAccountNetworkPolicyEgressNetworkAccess <a name="DataDatabricksAccountNetworkPolicyEgressNetworkAccess" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccess.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_account_network_policy

dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccess(
  restriction_mode: str,
  allowed_internet_destinations: IResolvable | typing.List[DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations] = None,
  allowed_storage_destinations: IResolvable | typing.List[DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations] = None,
  policy_enforcement: DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcement = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccess.property.restrictionMode">restriction_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/account_network_policy#restriction_mode DataDatabricksAccountNetworkPolicy#restriction_mode}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccess.property.allowedInternetDestinations">allowed_internet_destinations</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations">DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/account_network_policy#allowed_internet_destinations DataDatabricksAccountNetworkPolicy#allowed_internet_destinations}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccess.property.allowedStorageDestinations">allowed_storage_destinations</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations">DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/account_network_policy#allowed_storage_destinations DataDatabricksAccountNetworkPolicy#allowed_storage_destinations}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccess.property.policyEnforcement">policy_enforcement</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcement">DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcement</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/account_network_policy#policy_enforcement DataDatabricksAccountNetworkPolicy#policy_enforcement}. |

---

##### `restriction_mode`<sup>Required</sup> <a name="restriction_mode" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccess.property.restrictionMode"></a>

```python
restriction_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/account_network_policy#restriction_mode DataDatabricksAccountNetworkPolicy#restriction_mode}.

---

##### `allowed_internet_destinations`<sup>Optional</sup> <a name="allowed_internet_destinations" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccess.property.allowedInternetDestinations"></a>

```python
allowed_internet_destinations: IResolvable | typing.List[DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations">DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/account_network_policy#allowed_internet_destinations DataDatabricksAccountNetworkPolicy#allowed_internet_destinations}.

---

##### `allowed_storage_destinations`<sup>Optional</sup> <a name="allowed_storage_destinations" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccess.property.allowedStorageDestinations"></a>

```python
allowed_storage_destinations: IResolvable | typing.List[DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations">DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/account_network_policy#allowed_storage_destinations DataDatabricksAccountNetworkPolicy#allowed_storage_destinations}.

---

##### `policy_enforcement`<sup>Optional</sup> <a name="policy_enforcement" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccess.property.policyEnforcement"></a>

```python
policy_enforcement: DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcement
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcement">DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcement</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/account_network_policy#policy_enforcement DataDatabricksAccountNetworkPolicy#policy_enforcement}.

---

### DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations <a name="DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_account_network_policy

dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations(
  destination: str = None,
  internet_destination_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations.property.destination">destination</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/account_network_policy#destination DataDatabricksAccountNetworkPolicy#destination}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations.property.internetDestinationType">internet_destination_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/account_network_policy#internet_destination_type DataDatabricksAccountNetworkPolicy#internet_destination_type}. |

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations.property.destination"></a>

```python
destination: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/account_network_policy#destination DataDatabricksAccountNetworkPolicy#destination}.

---

##### `internet_destination_type`<sup>Optional</sup> <a name="internet_destination_type" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations.property.internetDestinationType"></a>

```python
internet_destination_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/account_network_policy#internet_destination_type DataDatabricksAccountNetworkPolicy#internet_destination_type}.

---

### DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations <a name="DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_account_network_policy

dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations(
  azure_storage_account: str = None,
  azure_storage_service: str = None,
  bucket_name: str = None,
  region: str = None,
  storage_destination_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations.property.azureStorageAccount">azure_storage_account</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/account_network_policy#azure_storage_account DataDatabricksAccountNetworkPolicy#azure_storage_account}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations.property.azureStorageService">azure_storage_service</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/account_network_policy#azure_storage_service DataDatabricksAccountNetworkPolicy#azure_storage_service}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations.property.bucketName">bucket_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/account_network_policy#bucket_name DataDatabricksAccountNetworkPolicy#bucket_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/account_network_policy#region DataDatabricksAccountNetworkPolicy#region}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations.property.storageDestinationType">storage_destination_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/account_network_policy#storage_destination_type DataDatabricksAccountNetworkPolicy#storage_destination_type}. |

---

##### `azure_storage_account`<sup>Optional</sup> <a name="azure_storage_account" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations.property.azureStorageAccount"></a>

```python
azure_storage_account: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/account_network_policy#azure_storage_account DataDatabricksAccountNetworkPolicy#azure_storage_account}.

---

##### `azure_storage_service`<sup>Optional</sup> <a name="azure_storage_service" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations.property.azureStorageService"></a>

```python
azure_storage_service: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/account_network_policy#azure_storage_service DataDatabricksAccountNetworkPolicy#azure_storage_service}.

---

##### `bucket_name`<sup>Optional</sup> <a name="bucket_name" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/account_network_policy#bucket_name DataDatabricksAccountNetworkPolicy#bucket_name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/account_network_policy#region DataDatabricksAccountNetworkPolicy#region}.

---

##### `storage_destination_type`<sup>Optional</sup> <a name="storage_destination_type" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations.property.storageDestinationType"></a>

```python
storage_destination_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/account_network_policy#storage_destination_type DataDatabricksAccountNetworkPolicy#storage_destination_type}.

---

### DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcement <a name="DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcement" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcement.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_account_network_policy

dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcement(
  dry_run_mode_product_filter: typing.List[str] = None,
  enforcement_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcement.property.dryRunModeProductFilter">dry_run_mode_product_filter</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/account_network_policy#dry_run_mode_product_filter DataDatabricksAccountNetworkPolicy#dry_run_mode_product_filter}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcement.property.enforcementMode">enforcement_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/account_network_policy#enforcement_mode DataDatabricksAccountNetworkPolicy#enforcement_mode}. |

---

##### `dry_run_mode_product_filter`<sup>Optional</sup> <a name="dry_run_mode_product_filter" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcement.property.dryRunModeProductFilter"></a>

```python
dry_run_mode_product_filter: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/account_network_policy#dry_run_mode_product_filter DataDatabricksAccountNetworkPolicy#dry_run_mode_product_filter}.

---

##### `enforcement_mode`<sup>Optional</sup> <a name="enforcement_mode" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcement.property.enforcementMode"></a>

```python
enforcement_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/account_network_policy#enforcement_mode DataDatabricksAccountNetworkPolicy#enforcement_mode}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList <a name="DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_account_network_policy

dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations">DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations">DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations</a>]

---


### DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference <a name="DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_account_network_policy

dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.resetDestination">reset_destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.resetInternetDestinationType">reset_internet_destination_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_destination` <a name="reset_destination" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.resetDestination"></a>

```python
def reset_destination() -> None
```

##### `reset_internet_destination_type` <a name="reset_internet_destination_type" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.resetInternetDestinationType"></a>

```python
def reset_internet_destination_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.property.destinationInput">destination_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.property.internetDestinationTypeInput">internet_destination_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.property.destination">destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.property.internetDestinationType">internet_destination_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations">DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.property.destinationInput"></a>

```python
destination_input: str
```

- *Type:* str

---

##### `internet_destination_type_input`<sup>Optional</sup> <a name="internet_destination_type_input" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.property.internetDestinationTypeInput"></a>

```python
internet_destination_type_input: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.property.destination"></a>

```python
destination: str
```

- *Type:* str

---

##### `internet_destination_type`<sup>Required</sup> <a name="internet_destination_type" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.property.internetDestinationType"></a>

```python
internet_destination_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations">DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations</a>

---


### DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList <a name="DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_account_network_policy

dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations">DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations">DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations</a>]

---


### DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference <a name="DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_account_network_policy

dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.resetAzureStorageAccount">reset_azure_storage_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.resetAzureStorageService">reset_azure_storage_service</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.resetBucketName">reset_bucket_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.resetStorageDestinationType">reset_storage_destination_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_azure_storage_account` <a name="reset_azure_storage_account" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.resetAzureStorageAccount"></a>

```python
def reset_azure_storage_account() -> None
```

##### `reset_azure_storage_service` <a name="reset_azure_storage_service" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.resetAzureStorageService"></a>

```python
def reset_azure_storage_service() -> None
```

##### `reset_bucket_name` <a name="reset_bucket_name" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.resetBucketName"></a>

```python
def reset_bucket_name() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_storage_destination_type` <a name="reset_storage_destination_type" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.resetStorageDestinationType"></a>

```python
def reset_storage_destination_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.azureStorageAccountInput">azure_storage_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.azureStorageServiceInput">azure_storage_service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.bucketNameInput">bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.storageDestinationTypeInput">storage_destination_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.azureStorageAccount">azure_storage_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.azureStorageService">azure_storage_service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.storageDestinationType">storage_destination_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations">DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `azure_storage_account_input`<sup>Optional</sup> <a name="azure_storage_account_input" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.azureStorageAccountInput"></a>

```python
azure_storage_account_input: str
```

- *Type:* str

---

##### `azure_storage_service_input`<sup>Optional</sup> <a name="azure_storage_service_input" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.azureStorageServiceInput"></a>

```python
azure_storage_service_input: str
```

- *Type:* str

---

##### `bucket_name_input`<sup>Optional</sup> <a name="bucket_name_input" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.bucketNameInput"></a>

```python
bucket_name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `storage_destination_type_input`<sup>Optional</sup> <a name="storage_destination_type_input" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.storageDestinationTypeInput"></a>

```python
storage_destination_type_input: str
```

- *Type:* str

---

##### `azure_storage_account`<sup>Required</sup> <a name="azure_storage_account" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.azureStorageAccount"></a>

```python
azure_storage_account: str
```

- *Type:* str

---

##### `azure_storage_service`<sup>Required</sup> <a name="azure_storage_service" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.azureStorageService"></a>

```python
azure_storage_service: str
```

- *Type:* str

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `storage_destination_type`<sup>Required</sup> <a name="storage_destination_type" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.storageDestinationType"></a>

```python
storage_destination_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations">DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations</a>

---


### DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference <a name="DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_account_network_policy

dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference.putAllowedInternetDestinations">put_allowed_internet_destinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference.putAllowedStorageDestinations">put_allowed_storage_destinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference.putPolicyEnforcement">put_policy_enforcement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference.resetAllowedInternetDestinations">reset_allowed_internet_destinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference.resetAllowedStorageDestinations">reset_allowed_storage_destinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference.resetPolicyEnforcement">reset_policy_enforcement</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_allowed_internet_destinations` <a name="put_allowed_internet_destinations" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference.putAllowedInternetDestinations"></a>

```python
def put_allowed_internet_destinations(
  value: IResolvable | typing.List[DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference.putAllowedInternetDestinations.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations">DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations</a>]

---

##### `put_allowed_storage_destinations` <a name="put_allowed_storage_destinations" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference.putAllowedStorageDestinations"></a>

```python
def put_allowed_storage_destinations(
  value: IResolvable | typing.List[DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference.putAllowedStorageDestinations.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations">DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations</a>]

---

##### `put_policy_enforcement` <a name="put_policy_enforcement" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference.putPolicyEnforcement"></a>

```python
def put_policy_enforcement(
  dry_run_mode_product_filter: typing.List[str] = None,
  enforcement_mode: str = None
) -> None
```

###### `dry_run_mode_product_filter`<sup>Optional</sup> <a name="dry_run_mode_product_filter" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference.putPolicyEnforcement.parameter.dryRunModeProductFilter"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/account_network_policy#dry_run_mode_product_filter DataDatabricksAccountNetworkPolicy#dry_run_mode_product_filter}.

---

###### `enforcement_mode`<sup>Optional</sup> <a name="enforcement_mode" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference.putPolicyEnforcement.parameter.enforcementMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/account_network_policy#enforcement_mode DataDatabricksAccountNetworkPolicy#enforcement_mode}.

---

##### `reset_allowed_internet_destinations` <a name="reset_allowed_internet_destinations" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference.resetAllowedInternetDestinations"></a>

```python
def reset_allowed_internet_destinations() -> None
```

##### `reset_allowed_storage_destinations` <a name="reset_allowed_storage_destinations" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference.resetAllowedStorageDestinations"></a>

```python
def reset_allowed_storage_destinations() -> None
```

##### `reset_policy_enforcement` <a name="reset_policy_enforcement" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference.resetPolicyEnforcement"></a>

```python
def reset_policy_enforcement() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference.property.allowedInternetDestinations">allowed_internet_destinations</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList">DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference.property.allowedStorageDestinations">allowed_storage_destinations</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList">DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference.property.policyEnforcement">policy_enforcement</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference">DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference.property.allowedInternetDestinationsInput">allowed_internet_destinations_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations">DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference.property.allowedStorageDestinationsInput">allowed_storage_destinations_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations">DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference.property.policyEnforcementInput">policy_enforcement_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcement">DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference.property.restrictionModeInput">restriction_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference.property.restrictionMode">restriction_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccess">DataDatabricksAccountNetworkPolicyEgressNetworkAccess</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_internet_destinations`<sup>Required</sup> <a name="allowed_internet_destinations" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference.property.allowedInternetDestinations"></a>

```python
allowed_internet_destinations: DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList">DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList</a>

---

##### `allowed_storage_destinations`<sup>Required</sup> <a name="allowed_storage_destinations" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference.property.allowedStorageDestinations"></a>

```python
allowed_storage_destinations: DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList">DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList</a>

---

##### `policy_enforcement`<sup>Required</sup> <a name="policy_enforcement" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference.property.policyEnforcement"></a>

```python
policy_enforcement: DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference">DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference</a>

---

##### `allowed_internet_destinations_input`<sup>Optional</sup> <a name="allowed_internet_destinations_input" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference.property.allowedInternetDestinationsInput"></a>

```python
allowed_internet_destinations_input: IResolvable | typing.List[DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations">DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations</a>]

---

##### `allowed_storage_destinations_input`<sup>Optional</sup> <a name="allowed_storage_destinations_input" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference.property.allowedStorageDestinationsInput"></a>

```python
allowed_storage_destinations_input: IResolvable | typing.List[DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations">DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations</a>]

---

##### `policy_enforcement_input`<sup>Optional</sup> <a name="policy_enforcement_input" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference.property.policyEnforcementInput"></a>

```python
policy_enforcement_input: IResolvable | DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcement
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcement">DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcement</a>

---

##### `restriction_mode_input`<sup>Optional</sup> <a name="restriction_mode_input" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference.property.restrictionModeInput"></a>

```python
restriction_mode_input: str
```

- *Type:* str

---

##### `restriction_mode`<sup>Required</sup> <a name="restriction_mode" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference.property.restrictionMode"></a>

```python
restriction_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAccountNetworkPolicyEgressNetworkAccess
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccess">DataDatabricksAccountNetworkPolicyEgressNetworkAccess</a>

---


### DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference <a name="DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_account_network_policy

dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.resetDryRunModeProductFilter">reset_dry_run_mode_product_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.resetEnforcementMode">reset_enforcement_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dry_run_mode_product_filter` <a name="reset_dry_run_mode_product_filter" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.resetDryRunModeProductFilter"></a>

```python
def reset_dry_run_mode_product_filter() -> None
```

##### `reset_enforcement_mode` <a name="reset_enforcement_mode" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.resetEnforcementMode"></a>

```python
def reset_enforcement_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.property.dryRunModeProductFilterInput">dry_run_mode_product_filter_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.property.enforcementModeInput">enforcement_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.property.dryRunModeProductFilter">dry_run_mode_product_filter</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.property.enforcementMode">enforcement_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcement">DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcement</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dry_run_mode_product_filter_input`<sup>Optional</sup> <a name="dry_run_mode_product_filter_input" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.property.dryRunModeProductFilterInput"></a>

```python
dry_run_mode_product_filter_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enforcement_mode_input`<sup>Optional</sup> <a name="enforcement_mode_input" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.property.enforcementModeInput"></a>

```python
enforcement_mode_input: str
```

- *Type:* str

---

##### `dry_run_mode_product_filter`<sup>Required</sup> <a name="dry_run_mode_product_filter" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.property.dryRunModeProductFilter"></a>

```python
dry_run_mode_product_filter: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enforcement_mode`<sup>Required</sup> <a name="enforcement_mode" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.property.enforcementMode"></a>

```python
enforcement_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcement
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcement">DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcement</a>

---


### DataDatabricksAccountNetworkPolicyEgressOutputReference <a name="DataDatabricksAccountNetworkPolicyEgressOutputReference" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_account_network_policy

dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressOutputReference.putNetworkAccess">put_network_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressOutputReference.resetNetworkAccess">reset_network_access</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_network_access` <a name="put_network_access" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressOutputReference.putNetworkAccess"></a>

```python
def put_network_access(
  restriction_mode: str,
  allowed_internet_destinations: IResolvable | typing.List[DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations] = None,
  allowed_storage_destinations: IResolvable | typing.List[DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations] = None,
  policy_enforcement: DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcement = None
) -> None
```

###### `restriction_mode`<sup>Required</sup> <a name="restriction_mode" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressOutputReference.putNetworkAccess.parameter.restrictionMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/account_network_policy#restriction_mode DataDatabricksAccountNetworkPolicy#restriction_mode}.

---

###### `allowed_internet_destinations`<sup>Optional</sup> <a name="allowed_internet_destinations" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressOutputReference.putNetworkAccess.parameter.allowedInternetDestinations"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations">DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/account_network_policy#allowed_internet_destinations DataDatabricksAccountNetworkPolicy#allowed_internet_destinations}.

---

###### `allowed_storage_destinations`<sup>Optional</sup> <a name="allowed_storage_destinations" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressOutputReference.putNetworkAccess.parameter.allowedStorageDestinations"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations">DataDatabricksAccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/account_network_policy#allowed_storage_destinations DataDatabricksAccountNetworkPolicy#allowed_storage_destinations}.

---

###### `policy_enforcement`<sup>Optional</sup> <a name="policy_enforcement" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressOutputReference.putNetworkAccess.parameter.policyEnforcement"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcement">DataDatabricksAccountNetworkPolicyEgressNetworkAccessPolicyEnforcement</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/account_network_policy#policy_enforcement DataDatabricksAccountNetworkPolicy#policy_enforcement}.

---

##### `reset_network_access` <a name="reset_network_access" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressOutputReference.resetNetworkAccess"></a>

```python
def reset_network_access() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressOutputReference.property.networkAccess">network_access</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference">DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressOutputReference.property.networkAccessInput">network_access_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccess">DataDatabricksAccountNetworkPolicyEgressNetworkAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgress">DataDatabricksAccountNetworkPolicyEgress</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `network_access`<sup>Required</sup> <a name="network_access" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressOutputReference.property.networkAccess"></a>

```python
network_access: DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference">DataDatabricksAccountNetworkPolicyEgressNetworkAccessOutputReference</a>

---

##### `network_access_input`<sup>Optional</sup> <a name="network_access_input" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressOutputReference.property.networkAccessInput"></a>

```python
network_access_input: IResolvable | DataDatabricksAccountNetworkPolicyEgressNetworkAccess
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressNetworkAccess">DataDatabricksAccountNetworkPolicyEgressNetworkAccess</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgressOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksAccountNetworkPolicyEgress
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicy.DataDatabricksAccountNetworkPolicyEgress">DataDatabricksAccountNetworkPolicyEgress</a>

---



