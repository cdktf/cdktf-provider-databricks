# `mwsCustomerManagedKeys` Submodule <a name="`mwsCustomerManagedKeys` Submodule" id="@cdktf/provider-databricks.mwsCustomerManagedKeys"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MwsCustomerManagedKeys <a name="MwsCustomerManagedKeys" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.66.0/docs/resources/mws_customer_managed_keys databricks_mws_customer_managed_keys}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import mws_customer_managed_keys

mwsCustomerManagedKeys.MwsCustomerManagedKeys(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  use_cases: typing.List[str],
  aws_key_info: MwsCustomerManagedKeysAwsKeyInfo = None,
  creation_time: typing.Union[int, float] = None,
  customer_managed_key_id: str = None,
  gcp_key_info: MwsCustomerManagedKeysGcpKeyInfo = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.66.0/docs/resources/mws_customer_managed_keys#account_id MwsCustomerManagedKeys#account_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.Initializer.parameter.useCases">use_cases</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.66.0/docs/resources/mws_customer_managed_keys#use_cases MwsCustomerManagedKeys#use_cases}. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.Initializer.parameter.awsKeyInfo">aws_key_info</a></code> | <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfo">MwsCustomerManagedKeysAwsKeyInfo</a></code> | aws_key_info block. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.Initializer.parameter.creationTime">creation_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.66.0/docs/resources/mws_customer_managed_keys#creation_time MwsCustomerManagedKeys#creation_time}. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.Initializer.parameter.customerManagedKeyId">customer_managed_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.66.0/docs/resources/mws_customer_managed_keys#customer_managed_key_id MwsCustomerManagedKeys#customer_managed_key_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.Initializer.parameter.gcpKeyInfo">gcp_key_info</a></code> | <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfo">MwsCustomerManagedKeysGcpKeyInfo</a></code> | gcp_key_info block. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.66.0/docs/resources/mws_customer_managed_keys#id MwsCustomerManagedKeys#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.Initializer.parameter.accountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.66.0/docs/resources/mws_customer_managed_keys#account_id MwsCustomerManagedKeys#account_id}.

---

##### `use_cases`<sup>Required</sup> <a name="use_cases" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.Initializer.parameter.useCases"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.66.0/docs/resources/mws_customer_managed_keys#use_cases MwsCustomerManagedKeys#use_cases}.

---

##### `aws_key_info`<sup>Optional</sup> <a name="aws_key_info" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.Initializer.parameter.awsKeyInfo"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfo">MwsCustomerManagedKeysAwsKeyInfo</a>

aws_key_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.66.0/docs/resources/mws_customer_managed_keys#aws_key_info MwsCustomerManagedKeys#aws_key_info}

---

##### `creation_time`<sup>Optional</sup> <a name="creation_time" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.Initializer.parameter.creationTime"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.66.0/docs/resources/mws_customer_managed_keys#creation_time MwsCustomerManagedKeys#creation_time}.

---

##### `customer_managed_key_id`<sup>Optional</sup> <a name="customer_managed_key_id" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.Initializer.parameter.customerManagedKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.66.0/docs/resources/mws_customer_managed_keys#customer_managed_key_id MwsCustomerManagedKeys#customer_managed_key_id}.

---

##### `gcp_key_info`<sup>Optional</sup> <a name="gcp_key_info" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.Initializer.parameter.gcpKeyInfo"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfo">MwsCustomerManagedKeysGcpKeyInfo</a>

gcp_key_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.66.0/docs/resources/mws_customer_managed_keys#gcp_key_info MwsCustomerManagedKeys#gcp_key_info}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.66.0/docs/resources/mws_customer_managed_keys#id MwsCustomerManagedKeys#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.putAwsKeyInfo">put_aws_key_info</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.putGcpKeyInfo">put_gcp_key_info</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.resetAwsKeyInfo">reset_aws_key_info</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.resetCreationTime">reset_creation_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.resetCustomerManagedKeyId">reset_customer_managed_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.resetGcpKeyInfo">reset_gcp_key_info</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_aws_key_info` <a name="put_aws_key_info" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.putAwsKeyInfo"></a>

```python
def put_aws_key_info(
  key_arn: str,
  key_alias: str = None,
  key_region: str = None
) -> None
```

###### `key_arn`<sup>Required</sup> <a name="key_arn" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.putAwsKeyInfo.parameter.keyArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.66.0/docs/resources/mws_customer_managed_keys#key_arn MwsCustomerManagedKeys#key_arn}.

---

###### `key_alias`<sup>Optional</sup> <a name="key_alias" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.putAwsKeyInfo.parameter.keyAlias"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.66.0/docs/resources/mws_customer_managed_keys#key_alias MwsCustomerManagedKeys#key_alias}.

---

###### `key_region`<sup>Optional</sup> <a name="key_region" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.putAwsKeyInfo.parameter.keyRegion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.66.0/docs/resources/mws_customer_managed_keys#key_region MwsCustomerManagedKeys#key_region}.

---

##### `put_gcp_key_info` <a name="put_gcp_key_info" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.putGcpKeyInfo"></a>

```python
def put_gcp_key_info(
  kms_key_id: str
) -> None
```

###### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.putGcpKeyInfo.parameter.kmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.66.0/docs/resources/mws_customer_managed_keys#kms_key_id MwsCustomerManagedKeys#kms_key_id}.

---

##### `reset_aws_key_info` <a name="reset_aws_key_info" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.resetAwsKeyInfo"></a>

```python
def reset_aws_key_info() -> None
```

##### `reset_creation_time` <a name="reset_creation_time" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.resetCreationTime"></a>

```python
def reset_creation_time() -> None
```

##### `reset_customer_managed_key_id` <a name="reset_customer_managed_key_id" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.resetCustomerManagedKeyId"></a>

```python
def reset_customer_managed_key_id() -> None
```

##### `reset_gcp_key_info` <a name="reset_gcp_key_info" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.resetGcpKeyInfo"></a>

```python
def reset_gcp_key_info() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a MwsCustomerManagedKeys resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import mws_customer_managed_keys

mwsCustomerManagedKeys.MwsCustomerManagedKeys.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import mws_customer_managed_keys

mwsCustomerManagedKeys.MwsCustomerManagedKeys.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_databricks import mws_customer_managed_keys

mwsCustomerManagedKeys.MwsCustomerManagedKeys.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import mws_customer_managed_keys

mwsCustomerManagedKeys.MwsCustomerManagedKeys.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a MwsCustomerManagedKeys resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MwsCustomerManagedKeys to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MwsCustomerManagedKeys that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.66.0/docs/resources/mws_customer_managed_keys#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MwsCustomerManagedKeys to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.awsKeyInfo">aws_key_info</a></code> | <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference">MwsCustomerManagedKeysAwsKeyInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.gcpKeyInfo">gcp_key_info</a></code> | <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference">MwsCustomerManagedKeysGcpKeyInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.awsKeyInfoInput">aws_key_info_input</a></code> | <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfo">MwsCustomerManagedKeysAwsKeyInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.creationTimeInput">creation_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.customerManagedKeyIdInput">customer_managed_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.gcpKeyInfoInput">gcp_key_info_input</a></code> | <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfo">MwsCustomerManagedKeysGcpKeyInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.useCasesInput">use_cases_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.creationTime">creation_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.customerManagedKeyId">customer_managed_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.useCases">use_cases</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `aws_key_info`<sup>Required</sup> <a name="aws_key_info" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.awsKeyInfo"></a>

```python
aws_key_info: MwsCustomerManagedKeysAwsKeyInfoOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference">MwsCustomerManagedKeysAwsKeyInfoOutputReference</a>

---

##### `gcp_key_info`<sup>Required</sup> <a name="gcp_key_info" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.gcpKeyInfo"></a>

```python
gcp_key_info: MwsCustomerManagedKeysGcpKeyInfoOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference">MwsCustomerManagedKeysGcpKeyInfoOutputReference</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `aws_key_info_input`<sup>Optional</sup> <a name="aws_key_info_input" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.awsKeyInfoInput"></a>

```python
aws_key_info_input: MwsCustomerManagedKeysAwsKeyInfo
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfo">MwsCustomerManagedKeysAwsKeyInfo</a>

---

##### `creation_time_input`<sup>Optional</sup> <a name="creation_time_input" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.creationTimeInput"></a>

```python
creation_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `customer_managed_key_id_input`<sup>Optional</sup> <a name="customer_managed_key_id_input" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.customerManagedKeyIdInput"></a>

```python
customer_managed_key_id_input: str
```

- *Type:* str

---

##### `gcp_key_info_input`<sup>Optional</sup> <a name="gcp_key_info_input" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.gcpKeyInfoInput"></a>

```python
gcp_key_info_input: MwsCustomerManagedKeysGcpKeyInfo
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfo">MwsCustomerManagedKeysGcpKeyInfo</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `use_cases_input`<sup>Optional</sup> <a name="use_cases_input" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.useCasesInput"></a>

```python
use_cases_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.creationTime"></a>

```python
creation_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `customer_managed_key_id`<sup>Required</sup> <a name="customer_managed_key_id" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.customerManagedKeyId"></a>

```python
customer_managed_key_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `use_cases`<sup>Required</sup> <a name="use_cases" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.useCases"></a>

```python
use_cases: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MwsCustomerManagedKeysAwsKeyInfo <a name="MwsCustomerManagedKeysAwsKeyInfo" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import mws_customer_managed_keys

mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfo(
  key_arn: str,
  key_alias: str = None,
  key_region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfo.property.keyArn">key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.66.0/docs/resources/mws_customer_managed_keys#key_arn MwsCustomerManagedKeys#key_arn}. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfo.property.keyAlias">key_alias</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.66.0/docs/resources/mws_customer_managed_keys#key_alias MwsCustomerManagedKeys#key_alias}. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfo.property.keyRegion">key_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.66.0/docs/resources/mws_customer_managed_keys#key_region MwsCustomerManagedKeys#key_region}. |

---

##### `key_arn`<sup>Required</sup> <a name="key_arn" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfo.property.keyArn"></a>

```python
key_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.66.0/docs/resources/mws_customer_managed_keys#key_arn MwsCustomerManagedKeys#key_arn}.

---

##### `key_alias`<sup>Optional</sup> <a name="key_alias" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfo.property.keyAlias"></a>

```python
key_alias: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.66.0/docs/resources/mws_customer_managed_keys#key_alias MwsCustomerManagedKeys#key_alias}.

---

##### `key_region`<sup>Optional</sup> <a name="key_region" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfo.property.keyRegion"></a>

```python
key_region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.66.0/docs/resources/mws_customer_managed_keys#key_region MwsCustomerManagedKeys#key_region}.

---

### MwsCustomerManagedKeysConfig <a name="MwsCustomerManagedKeysConfig" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import mws_customer_managed_keys

mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_id: str,
  use_cases: typing.List[str],
  aws_key_info: MwsCustomerManagedKeysAwsKeyInfo = None,
  creation_time: typing.Union[int, float] = None,
  customer_managed_key_id: str = None,
  gcp_key_info: MwsCustomerManagedKeysGcpKeyInfo = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.66.0/docs/resources/mws_customer_managed_keys#account_id MwsCustomerManagedKeys#account_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.useCases">use_cases</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.66.0/docs/resources/mws_customer_managed_keys#use_cases MwsCustomerManagedKeys#use_cases}. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.awsKeyInfo">aws_key_info</a></code> | <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfo">MwsCustomerManagedKeysAwsKeyInfo</a></code> | aws_key_info block. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.creationTime">creation_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.66.0/docs/resources/mws_customer_managed_keys#creation_time MwsCustomerManagedKeys#creation_time}. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.customerManagedKeyId">customer_managed_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.66.0/docs/resources/mws_customer_managed_keys#customer_managed_key_id MwsCustomerManagedKeys#customer_managed_key_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.gcpKeyInfo">gcp_key_info</a></code> | <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfo">MwsCustomerManagedKeysGcpKeyInfo</a></code> | gcp_key_info block. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.66.0/docs/resources/mws_customer_managed_keys#id MwsCustomerManagedKeys#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.66.0/docs/resources/mws_customer_managed_keys#account_id MwsCustomerManagedKeys#account_id}.

---

##### `use_cases`<sup>Required</sup> <a name="use_cases" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.useCases"></a>

```python
use_cases: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.66.0/docs/resources/mws_customer_managed_keys#use_cases MwsCustomerManagedKeys#use_cases}.

---

##### `aws_key_info`<sup>Optional</sup> <a name="aws_key_info" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.awsKeyInfo"></a>

```python
aws_key_info: MwsCustomerManagedKeysAwsKeyInfo
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfo">MwsCustomerManagedKeysAwsKeyInfo</a>

aws_key_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.66.0/docs/resources/mws_customer_managed_keys#aws_key_info MwsCustomerManagedKeys#aws_key_info}

---

##### `creation_time`<sup>Optional</sup> <a name="creation_time" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.creationTime"></a>

```python
creation_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.66.0/docs/resources/mws_customer_managed_keys#creation_time MwsCustomerManagedKeys#creation_time}.

---

##### `customer_managed_key_id`<sup>Optional</sup> <a name="customer_managed_key_id" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.customerManagedKeyId"></a>

```python
customer_managed_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.66.0/docs/resources/mws_customer_managed_keys#customer_managed_key_id MwsCustomerManagedKeys#customer_managed_key_id}.

---

##### `gcp_key_info`<sup>Optional</sup> <a name="gcp_key_info" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.gcpKeyInfo"></a>

```python
gcp_key_info: MwsCustomerManagedKeysGcpKeyInfo
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfo">MwsCustomerManagedKeysGcpKeyInfo</a>

gcp_key_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.66.0/docs/resources/mws_customer_managed_keys#gcp_key_info MwsCustomerManagedKeys#gcp_key_info}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.66.0/docs/resources/mws_customer_managed_keys#id MwsCustomerManagedKeys#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### MwsCustomerManagedKeysGcpKeyInfo <a name="MwsCustomerManagedKeysGcpKeyInfo" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import mws_customer_managed_keys

mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfo(
  kms_key_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfo.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.66.0/docs/resources/mws_customer_managed_keys#kms_key_id MwsCustomerManagedKeys#kms_key_id}. |

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfo.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.66.0/docs/resources/mws_customer_managed_keys#kms_key_id MwsCustomerManagedKeys#kms_key_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### MwsCustomerManagedKeysAwsKeyInfoOutputReference <a name="MwsCustomerManagedKeysAwsKeyInfoOutputReference" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import mws_customer_managed_keys

mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.resetKeyAlias">reset_key_alias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.resetKeyRegion">reset_key_region</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key_alias` <a name="reset_key_alias" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.resetKeyAlias"></a>

```python
def reset_key_alias() -> None
```

##### `reset_key_region` <a name="reset_key_region" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.resetKeyRegion"></a>

```python
def reset_key_region() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.property.keyAliasInput">key_alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.property.keyArnInput">key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.property.keyRegionInput">key_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.property.keyAlias">key_alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.property.keyArn">key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.property.keyRegion">key_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfo">MwsCustomerManagedKeysAwsKeyInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_alias_input`<sup>Optional</sup> <a name="key_alias_input" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.property.keyAliasInput"></a>

```python
key_alias_input: str
```

- *Type:* str

---

##### `key_arn_input`<sup>Optional</sup> <a name="key_arn_input" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.property.keyArnInput"></a>

```python
key_arn_input: str
```

- *Type:* str

---

##### `key_region_input`<sup>Optional</sup> <a name="key_region_input" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.property.keyRegionInput"></a>

```python
key_region_input: str
```

- *Type:* str

---

##### `key_alias`<sup>Required</sup> <a name="key_alias" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.property.keyAlias"></a>

```python
key_alias: str
```

- *Type:* str

---

##### `key_arn`<sup>Required</sup> <a name="key_arn" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.property.keyArn"></a>

```python
key_arn: str
```

- *Type:* str

---

##### `key_region`<sup>Required</sup> <a name="key_region" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.property.keyRegion"></a>

```python
key_region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.property.internalValue"></a>

```python
internal_value: MwsCustomerManagedKeysAwsKeyInfo
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfo">MwsCustomerManagedKeysAwsKeyInfo</a>

---


### MwsCustomerManagedKeysGcpKeyInfoOutputReference <a name="MwsCustomerManagedKeysGcpKeyInfoOutputReference" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import mws_customer_managed_keys

mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfo">MwsCustomerManagedKeysGcpKeyInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfoOutputReference.property.internalValue"></a>

```python
internal_value: MwsCustomerManagedKeysGcpKeyInfo
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysGcpKeyInfo">MwsCustomerManagedKeysGcpKeyInfo</a>

---



