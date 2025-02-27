# `dataDatabricksAwsCrossaccountPolicy` Submodule <a name="`dataDatabricksAwsCrossaccountPolicy` Submodule" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAwsCrossaccountPolicy <a name="DataDatabricksAwsCrossaccountPolicy" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/aws_crossaccount_policy databricks_aws_crossaccount_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_aws_crossaccount_policy

dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  aws_account_id: str = None,
  aws_partition: str = None,
  id: str = None,
  pass_roles: typing.List[str] = None,
  policy_type: str = None,
  region: str = None,
  security_group_id: str = None,
  vpc_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.Initializer.parameter.awsAccountId">aws_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/aws_crossaccount_policy#aws_account_id DataDatabricksAwsCrossaccountPolicy#aws_account_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.Initializer.parameter.awsPartition">aws_partition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/aws_crossaccount_policy#aws_partition DataDatabricksAwsCrossaccountPolicy#aws_partition}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/aws_crossaccount_policy#id DataDatabricksAwsCrossaccountPolicy#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.Initializer.parameter.passRoles">pass_roles</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/aws_crossaccount_policy#pass_roles DataDatabricksAwsCrossaccountPolicy#pass_roles}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.Initializer.parameter.policyType">policy_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/aws_crossaccount_policy#policy_type DataDatabricksAwsCrossaccountPolicy#policy_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/aws_crossaccount_policy#region DataDatabricksAwsCrossaccountPolicy#region}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.Initializer.parameter.securityGroupId">security_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/aws_crossaccount_policy#security_group_id DataDatabricksAwsCrossaccountPolicy#security_group_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.Initializer.parameter.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/aws_crossaccount_policy#vpc_id DataDatabricksAwsCrossaccountPolicy#vpc_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `aws_account_id`<sup>Optional</sup> <a name="aws_account_id" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.Initializer.parameter.awsAccountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/aws_crossaccount_policy#aws_account_id DataDatabricksAwsCrossaccountPolicy#aws_account_id}.

---

##### `aws_partition`<sup>Optional</sup> <a name="aws_partition" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.Initializer.parameter.awsPartition"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/aws_crossaccount_policy#aws_partition DataDatabricksAwsCrossaccountPolicy#aws_partition}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/aws_crossaccount_policy#id DataDatabricksAwsCrossaccountPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `pass_roles`<sup>Optional</sup> <a name="pass_roles" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.Initializer.parameter.passRoles"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/aws_crossaccount_policy#pass_roles DataDatabricksAwsCrossaccountPolicy#pass_roles}.

---

##### `policy_type`<sup>Optional</sup> <a name="policy_type" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.Initializer.parameter.policyType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/aws_crossaccount_policy#policy_type DataDatabricksAwsCrossaccountPolicy#policy_type}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/aws_crossaccount_policy#region DataDatabricksAwsCrossaccountPolicy#region}.

---

##### `security_group_id`<sup>Optional</sup> <a name="security_group_id" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.Initializer.parameter.securityGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/aws_crossaccount_policy#security_group_id DataDatabricksAwsCrossaccountPolicy#security_group_id}.

---

##### `vpc_id`<sup>Optional</sup> <a name="vpc_id" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.Initializer.parameter.vpcId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/aws_crossaccount_policy#vpc_id DataDatabricksAwsCrossaccountPolicy#vpc_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.resetAwsAccountId">reset_aws_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.resetAwsPartition">reset_aws_partition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.resetPassRoles">reset_pass_roles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.resetPolicyType">reset_policy_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.resetSecurityGroupId">reset_security_group_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.resetVpcId">reset_vpc_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_aws_account_id` <a name="reset_aws_account_id" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.resetAwsAccountId"></a>

```python
def reset_aws_account_id() -> None
```

##### `reset_aws_partition` <a name="reset_aws_partition" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.resetAwsPartition"></a>

```python
def reset_aws_partition() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_pass_roles` <a name="reset_pass_roles" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.resetPassRoles"></a>

```python
def reset_pass_roles() -> None
```

##### `reset_policy_type` <a name="reset_policy_type" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.resetPolicyType"></a>

```python
def reset_policy_type() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_security_group_id` <a name="reset_security_group_id" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.resetSecurityGroupId"></a>

```python
def reset_security_group_id() -> None
```

##### `reset_vpc_id` <a name="reset_vpc_id" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.resetVpcId"></a>

```python
def reset_vpc_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataDatabricksAwsCrossaccountPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_aws_crossaccount_policy

dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_aws_crossaccount_policy

dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_aws_crossaccount_policy

dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_aws_crossaccount_policy

dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataDatabricksAwsCrossaccountPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksAwsCrossaccountPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksAwsCrossaccountPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/aws_crossaccount_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksAwsCrossaccountPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.json">json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.awsAccountIdInput">aws_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.awsPartitionInput">aws_partition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.passRolesInput">pass_roles_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.policyTypeInput">policy_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.securityGroupIdInput">security_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.vpcIdInput">vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.awsAccountId">aws_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.awsPartition">aws_partition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.passRoles">pass_roles</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.policyType">policy_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.securityGroupId">security_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `json`<sup>Required</sup> <a name="json" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.json"></a>

```python
json: str
```

- *Type:* str

---

##### `aws_account_id_input`<sup>Optional</sup> <a name="aws_account_id_input" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.awsAccountIdInput"></a>

```python
aws_account_id_input: str
```

- *Type:* str

---

##### `aws_partition_input`<sup>Optional</sup> <a name="aws_partition_input" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.awsPartitionInput"></a>

```python
aws_partition_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `pass_roles_input`<sup>Optional</sup> <a name="pass_roles_input" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.passRolesInput"></a>

```python
pass_roles_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `policy_type_input`<sup>Optional</sup> <a name="policy_type_input" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.policyTypeInput"></a>

```python
policy_type_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `security_group_id_input`<sup>Optional</sup> <a name="security_group_id_input" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.securityGroupIdInput"></a>

```python
security_group_id_input: str
```

- *Type:* str

---

##### `vpc_id_input`<sup>Optional</sup> <a name="vpc_id_input" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.vpcIdInput"></a>

```python
vpc_id_input: str
```

- *Type:* str

---

##### `aws_account_id`<sup>Required</sup> <a name="aws_account_id" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.awsAccountId"></a>

```python
aws_account_id: str
```

- *Type:* str

---

##### `aws_partition`<sup>Required</sup> <a name="aws_partition" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.awsPartition"></a>

```python
aws_partition: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `pass_roles`<sup>Required</sup> <a name="pass_roles" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.passRoles"></a>

```python
pass_roles: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `policy_type`<sup>Required</sup> <a name="policy_type" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.policyType"></a>

```python
policy_type: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `security_group_id`<sup>Required</sup> <a name="security_group_id" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.securityGroupId"></a>

```python
security_group_id: str
```

- *Type:* str

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAwsCrossaccountPolicyConfig <a name="DataDatabricksAwsCrossaccountPolicyConfig" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_aws_crossaccount_policy

dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  aws_account_id: str = None,
  aws_partition: str = None,
  id: str = None,
  pass_roles: typing.List[str] = None,
  policy_type: str = None,
  region: str = None,
  security_group_id: str = None,
  vpc_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig.property.awsAccountId">aws_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/aws_crossaccount_policy#aws_account_id DataDatabricksAwsCrossaccountPolicy#aws_account_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig.property.awsPartition">aws_partition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/aws_crossaccount_policy#aws_partition DataDatabricksAwsCrossaccountPolicy#aws_partition}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/aws_crossaccount_policy#id DataDatabricksAwsCrossaccountPolicy#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig.property.passRoles">pass_roles</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/aws_crossaccount_policy#pass_roles DataDatabricksAwsCrossaccountPolicy#pass_roles}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig.property.policyType">policy_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/aws_crossaccount_policy#policy_type DataDatabricksAwsCrossaccountPolicy#policy_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/aws_crossaccount_policy#region DataDatabricksAwsCrossaccountPolicy#region}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig.property.securityGroupId">security_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/aws_crossaccount_policy#security_group_id DataDatabricksAwsCrossaccountPolicy#security_group_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig.property.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/aws_crossaccount_policy#vpc_id DataDatabricksAwsCrossaccountPolicy#vpc_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `aws_account_id`<sup>Optional</sup> <a name="aws_account_id" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig.property.awsAccountId"></a>

```python
aws_account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/aws_crossaccount_policy#aws_account_id DataDatabricksAwsCrossaccountPolicy#aws_account_id}.

---

##### `aws_partition`<sup>Optional</sup> <a name="aws_partition" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig.property.awsPartition"></a>

```python
aws_partition: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/aws_crossaccount_policy#aws_partition DataDatabricksAwsCrossaccountPolicy#aws_partition}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/aws_crossaccount_policy#id DataDatabricksAwsCrossaccountPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `pass_roles`<sup>Optional</sup> <a name="pass_roles" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig.property.passRoles"></a>

```python
pass_roles: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/aws_crossaccount_policy#pass_roles DataDatabricksAwsCrossaccountPolicy#pass_roles}.

---

##### `policy_type`<sup>Optional</sup> <a name="policy_type" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig.property.policyType"></a>

```python
policy_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/aws_crossaccount_policy#policy_type DataDatabricksAwsCrossaccountPolicy#policy_type}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/aws_crossaccount_policy#region DataDatabricksAwsCrossaccountPolicy#region}.

---

##### `security_group_id`<sup>Optional</sup> <a name="security_group_id" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig.property.securityGroupId"></a>

```python
security_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/aws_crossaccount_policy#security_group_id DataDatabricksAwsCrossaccountPolicy#security_group_id}.

---

##### `vpc_id`<sup>Optional</sup> <a name="vpc_id" id="@cdktf/provider-databricks.dataDatabricksAwsCrossaccountPolicy.DataDatabricksAwsCrossaccountPolicyConfig.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/aws_crossaccount_policy#vpc_id DataDatabricksAwsCrossaccountPolicy#vpc_id}.

---



