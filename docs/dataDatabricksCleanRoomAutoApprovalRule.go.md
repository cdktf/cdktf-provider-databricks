# `dataDatabricksCleanRoomAutoApprovalRule` Submodule <a name="`dataDatabricksCleanRoomAutoApprovalRule` Submodule" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksCleanRoomAutoApprovalRule <a name="DataDatabricksCleanRoomAutoApprovalRule" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_room_auto_approval_rule databricks_clean_room_auto_approval_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomautoapprovalrule"

datadatabrickscleanroomautoapprovalrule.NewDataDatabricksCleanRoomAutoApprovalRule(scope Construct, id *string, config DataDatabricksCleanRoomAutoApprovalRuleConfig) DataDatabricksCleanRoomAutoApprovalRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRuleConfig">DataDatabricksCleanRoomAutoApprovalRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRuleConfig">DataDatabricksCleanRoomAutoApprovalRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.resetAuthorCollaboratorAlias">ResetAuthorCollaboratorAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.resetAuthorScope">ResetAuthorScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.resetCleanRoomName">ResetCleanRoomName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.resetRunnerCollaboratorAlias">ResetRunnerCollaboratorAlias</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAuthorCollaboratorAlias` <a name="ResetAuthorCollaboratorAlias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.resetAuthorCollaboratorAlias"></a>

```go
func ResetAuthorCollaboratorAlias()
```

##### `ResetAuthorScope` <a name="ResetAuthorScope" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.resetAuthorScope"></a>

```go
func ResetAuthorScope()
```

##### `ResetCleanRoomName` <a name="ResetCleanRoomName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.resetCleanRoomName"></a>

```go
func ResetCleanRoomName()
```

##### `ResetRunnerCollaboratorAlias` <a name="ResetRunnerCollaboratorAlias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.resetRunnerCollaboratorAlias"></a>

```go
func ResetRunnerCollaboratorAlias()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksCleanRoomAutoApprovalRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomautoapprovalrule"

datadatabrickscleanroomautoapprovalrule.DataDatabricksCleanRoomAutoApprovalRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomautoapprovalrule"

datadatabrickscleanroomautoapprovalrule.DataDatabricksCleanRoomAutoApprovalRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomautoapprovalrule"

datadatabrickscleanroomautoapprovalrule.DataDatabricksCleanRoomAutoApprovalRule_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomautoapprovalrule"

datadatabrickscleanroomautoapprovalrule.DataDatabricksCleanRoomAutoApprovalRule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataDatabricksCleanRoomAutoApprovalRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksCleanRoomAutoApprovalRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksCleanRoomAutoApprovalRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_room_auto_approval_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksCleanRoomAutoApprovalRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.createdAt">CreatedAt</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.ruleId">RuleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.ruleOwnerCollaboratorAlias">RuleOwnerCollaboratorAlias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.authorCollaboratorAliasInput">AuthorCollaboratorAliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.authorScopeInput">AuthorScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.cleanRoomNameInput">CleanRoomNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.runnerCollaboratorAliasInput">RunnerCollaboratorAliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.authorCollaboratorAlias">AuthorCollaboratorAlias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.authorScope">AuthorScope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.cleanRoomName">CleanRoomName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.runnerCollaboratorAlias">RunnerCollaboratorAlias</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.createdAt"></a>

```go
func CreatedAt() *f64
```

- *Type:* *f64

---

##### `RuleId`<sup>Required</sup> <a name="RuleId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.ruleId"></a>

```go
func RuleId() *string
```

- *Type:* *string

---

##### `RuleOwnerCollaboratorAlias`<sup>Required</sup> <a name="RuleOwnerCollaboratorAlias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.ruleOwnerCollaboratorAlias"></a>

```go
func RuleOwnerCollaboratorAlias() *string
```

- *Type:* *string

---

##### `AuthorCollaboratorAliasInput`<sup>Optional</sup> <a name="AuthorCollaboratorAliasInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.authorCollaboratorAliasInput"></a>

```go
func AuthorCollaboratorAliasInput() *string
```

- *Type:* *string

---

##### `AuthorScopeInput`<sup>Optional</sup> <a name="AuthorScopeInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.authorScopeInput"></a>

```go
func AuthorScopeInput() *string
```

- *Type:* *string

---

##### `CleanRoomNameInput`<sup>Optional</sup> <a name="CleanRoomNameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.cleanRoomNameInput"></a>

```go
func CleanRoomNameInput() *string
```

- *Type:* *string

---

##### `RunnerCollaboratorAliasInput`<sup>Optional</sup> <a name="RunnerCollaboratorAliasInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.runnerCollaboratorAliasInput"></a>

```go
func RunnerCollaboratorAliasInput() *string
```

- *Type:* *string

---

##### `AuthorCollaboratorAlias`<sup>Required</sup> <a name="AuthorCollaboratorAlias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.authorCollaboratorAlias"></a>

```go
func AuthorCollaboratorAlias() *string
```

- *Type:* *string

---

##### `AuthorScope`<sup>Required</sup> <a name="AuthorScope" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.authorScope"></a>

```go
func AuthorScope() *string
```

- *Type:* *string

---

##### `CleanRoomName`<sup>Required</sup> <a name="CleanRoomName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.cleanRoomName"></a>

```go
func CleanRoomName() *string
```

- *Type:* *string

---

##### `RunnerCollaboratorAlias`<sup>Required</sup> <a name="RunnerCollaboratorAlias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.runnerCollaboratorAlias"></a>

```go
func RunnerCollaboratorAlias() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksCleanRoomAutoApprovalRuleConfig <a name="DataDatabricksCleanRoomAutoApprovalRuleConfig" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRuleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabrickscleanroomautoapprovalrule"

&datadatabrickscleanroomautoapprovalrule.DataDatabricksCleanRoomAutoApprovalRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AuthorCollaboratorAlias: *string,
	AuthorScope: *string,
	CleanRoomName: *string,
	RunnerCollaboratorAlias: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRuleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRuleConfig.property.authorCollaboratorAlias">AuthorCollaboratorAlias</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_room_auto_approval_rule#author_collaborator_alias DataDatabricksCleanRoomAutoApprovalRule#author_collaborator_alias}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRuleConfig.property.authorScope">AuthorScope</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_room_auto_approval_rule#author_scope DataDatabricksCleanRoomAutoApprovalRule#author_scope}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRuleConfig.property.cleanRoomName">CleanRoomName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_room_auto_approval_rule#clean_room_name DataDatabricksCleanRoomAutoApprovalRule#clean_room_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRuleConfig.property.runnerCollaboratorAlias">RunnerCollaboratorAlias</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_room_auto_approval_rule#runner_collaborator_alias DataDatabricksCleanRoomAutoApprovalRule#runner_collaborator_alias}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AuthorCollaboratorAlias`<sup>Optional</sup> <a name="AuthorCollaboratorAlias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRuleConfig.property.authorCollaboratorAlias"></a>

```go
AuthorCollaboratorAlias *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_room_auto_approval_rule#author_collaborator_alias DataDatabricksCleanRoomAutoApprovalRule#author_collaborator_alias}.

---

##### `AuthorScope`<sup>Optional</sup> <a name="AuthorScope" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRuleConfig.property.authorScope"></a>

```go
AuthorScope *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_room_auto_approval_rule#author_scope DataDatabricksCleanRoomAutoApprovalRule#author_scope}.

---

##### `CleanRoomName`<sup>Optional</sup> <a name="CleanRoomName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRuleConfig.property.cleanRoomName"></a>

```go
CleanRoomName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_room_auto_approval_rule#clean_room_name DataDatabricksCleanRoomAutoApprovalRule#clean_room_name}.

---

##### `RunnerCollaboratorAlias`<sup>Optional</sup> <a name="RunnerCollaboratorAlias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAutoApprovalRule.DataDatabricksCleanRoomAutoApprovalRuleConfig.property.runnerCollaboratorAlias"></a>

```go
RunnerCollaboratorAlias *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/clean_room_auto_approval_rule#runner_collaborator_alias DataDatabricksCleanRoomAutoApprovalRule#runner_collaborator_alias}.

---



