# `databricks_user`

Refer to the Terraform Registory for docs: [`databricks_user`](https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/user).

# `user` Submodule <a name="`user` Submodule" id="@cdktf/provider-databricks.user"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### User <a name="User" id="@cdktf/provider-databricks.user.User"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/user databricks_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.user.User.Initializer"></a>

```typescript
import { user } from '@cdktf/provider-databricks'

new user.User(scope: Construct, id: string, config: UserConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.user.User.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.user.User.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.user.User.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.user.UserConfig">UserConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.user.User.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.user.User.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.user.User.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.user.UserConfig">UserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.user.User.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.user.User.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.user.User.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.user.User.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.user.User.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.resetAclPrincipalId">resetAclPrincipalId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.resetActive">resetActive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.resetAllowClusterCreate">resetAllowClusterCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.resetAllowInstancePoolCreate">resetAllowInstancePoolCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.resetDatabricksSqlAccess">resetDatabricksSqlAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.resetDisableAsUserDeletion">resetDisableAsUserDeletion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.resetExternalId">resetExternalId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.resetForce">resetForce</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.resetForceDeleteHomeDir">resetForceDeleteHomeDir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.resetForceDeleteRepos">resetForceDeleteRepos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.resetHome">resetHome</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.resetRepos">resetRepos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.resetWorkspaceAccess">resetWorkspaceAccess</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.user.User.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.user.User.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.user.User.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.user.User.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.user.User.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.user.User.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.user.User.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.user.User.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.user.User.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.user.User.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.user.User.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.user.User.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.user.User.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.user.User.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.user.User.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.user.User.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.user.User.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.user.User.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.user.User.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.user.User.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.user.User.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.user.User.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.user.User.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.user.User.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.user.User.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.user.User.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.user.User.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.user.User.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.user.User.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAclPrincipalId` <a name="resetAclPrincipalId" id="@cdktf/provider-databricks.user.User.resetAclPrincipalId"></a>

```typescript
public resetAclPrincipalId(): void
```

##### `resetActive` <a name="resetActive" id="@cdktf/provider-databricks.user.User.resetActive"></a>

```typescript
public resetActive(): void
```

##### `resetAllowClusterCreate` <a name="resetAllowClusterCreate" id="@cdktf/provider-databricks.user.User.resetAllowClusterCreate"></a>

```typescript
public resetAllowClusterCreate(): void
```

##### `resetAllowInstancePoolCreate` <a name="resetAllowInstancePoolCreate" id="@cdktf/provider-databricks.user.User.resetAllowInstancePoolCreate"></a>

```typescript
public resetAllowInstancePoolCreate(): void
```

##### `resetDatabricksSqlAccess` <a name="resetDatabricksSqlAccess" id="@cdktf/provider-databricks.user.User.resetDatabricksSqlAccess"></a>

```typescript
public resetDatabricksSqlAccess(): void
```

##### `resetDisableAsUserDeletion` <a name="resetDisableAsUserDeletion" id="@cdktf/provider-databricks.user.User.resetDisableAsUserDeletion"></a>

```typescript
public resetDisableAsUserDeletion(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-databricks.user.User.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetExternalId` <a name="resetExternalId" id="@cdktf/provider-databricks.user.User.resetExternalId"></a>

```typescript
public resetExternalId(): void
```

##### `resetForce` <a name="resetForce" id="@cdktf/provider-databricks.user.User.resetForce"></a>

```typescript
public resetForce(): void
```

##### `resetForceDeleteHomeDir` <a name="resetForceDeleteHomeDir" id="@cdktf/provider-databricks.user.User.resetForceDeleteHomeDir"></a>

```typescript
public resetForceDeleteHomeDir(): void
```

##### `resetForceDeleteRepos` <a name="resetForceDeleteRepos" id="@cdktf/provider-databricks.user.User.resetForceDeleteRepos"></a>

```typescript
public resetForceDeleteRepos(): void
```

##### `resetHome` <a name="resetHome" id="@cdktf/provider-databricks.user.User.resetHome"></a>

```typescript
public resetHome(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.user.User.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRepos` <a name="resetRepos" id="@cdktf/provider-databricks.user.User.resetRepos"></a>

```typescript
public resetRepos(): void
```

##### `resetWorkspaceAccess` <a name="resetWorkspaceAccess" id="@cdktf/provider-databricks.user.User.resetWorkspaceAccess"></a>

```typescript
public resetWorkspaceAccess(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.user.User.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.user.User.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.user.User.isConstruct"></a>

```typescript
import { user } from '@cdktf/provider-databricks'

user.User.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.user.User.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.user.User.isTerraformElement"></a>

```typescript
import { user } from '@cdktf/provider-databricks'

user.User.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.user.User.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.user.User.isTerraformResource"></a>

```typescript
import { user } from '@cdktf/provider-databricks'

user.User.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.user.User.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.user.User.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.user.User.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.aclPrincipalIdInput">aclPrincipalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.activeInput">activeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.allowClusterCreateInput">allowClusterCreateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.allowInstancePoolCreateInput">allowInstancePoolCreateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.databricksSqlAccessInput">databricksSqlAccessInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.disableAsUserDeletionInput">disableAsUserDeletionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.externalIdInput">externalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.forceDeleteHomeDirInput">forceDeleteHomeDirInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.forceDeleteReposInput">forceDeleteReposInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.forceInput">forceInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.homeInput">homeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.reposInput">reposInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.userNameInput">userNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.workspaceAccessInput">workspaceAccessInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.aclPrincipalId">aclPrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.active">active</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.allowClusterCreate">allowClusterCreate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.allowInstancePoolCreate">allowInstancePoolCreate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.databricksSqlAccess">databricksSqlAccess</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.disableAsUserDeletion">disableAsUserDeletion</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.externalId">externalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.force">force</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.forceDeleteHomeDir">forceDeleteHomeDir</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.forceDeleteRepos">forceDeleteRepos</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.home">home</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.repos">repos</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.userName">userName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.User.property.workspaceAccess">workspaceAccess</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.user.User.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.user.User.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.user.User.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.user.User.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.user.User.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.user.User.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.user.User.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.user.User.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.user.User.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.user.User.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.user.User.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.user.User.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.user.User.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.user.User.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `aclPrincipalIdInput`<sup>Optional</sup> <a name="aclPrincipalIdInput" id="@cdktf/provider-databricks.user.User.property.aclPrincipalIdInput"></a>

```typescript
public readonly aclPrincipalIdInput: string;
```

- *Type:* string

---

##### `activeInput`<sup>Optional</sup> <a name="activeInput" id="@cdktf/provider-databricks.user.User.property.activeInput"></a>

```typescript
public readonly activeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowClusterCreateInput`<sup>Optional</sup> <a name="allowClusterCreateInput" id="@cdktf/provider-databricks.user.User.property.allowClusterCreateInput"></a>

```typescript
public readonly allowClusterCreateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowInstancePoolCreateInput`<sup>Optional</sup> <a name="allowInstancePoolCreateInput" id="@cdktf/provider-databricks.user.User.property.allowInstancePoolCreateInput"></a>

```typescript
public readonly allowInstancePoolCreateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `databricksSqlAccessInput`<sup>Optional</sup> <a name="databricksSqlAccessInput" id="@cdktf/provider-databricks.user.User.property.databricksSqlAccessInput"></a>

```typescript
public readonly databricksSqlAccessInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `disableAsUserDeletionInput`<sup>Optional</sup> <a name="disableAsUserDeletionInput" id="@cdktf/provider-databricks.user.User.property.disableAsUserDeletionInput"></a>

```typescript
public readonly disableAsUserDeletionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-databricks.user.User.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `externalIdInput`<sup>Optional</sup> <a name="externalIdInput" id="@cdktf/provider-databricks.user.User.property.externalIdInput"></a>

```typescript
public readonly externalIdInput: string;
```

- *Type:* string

---

##### `forceDeleteHomeDirInput`<sup>Optional</sup> <a name="forceDeleteHomeDirInput" id="@cdktf/provider-databricks.user.User.property.forceDeleteHomeDirInput"></a>

```typescript
public readonly forceDeleteHomeDirInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `forceDeleteReposInput`<sup>Optional</sup> <a name="forceDeleteReposInput" id="@cdktf/provider-databricks.user.User.property.forceDeleteReposInput"></a>

```typescript
public readonly forceDeleteReposInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `forceInput`<sup>Optional</sup> <a name="forceInput" id="@cdktf/provider-databricks.user.User.property.forceInput"></a>

```typescript
public readonly forceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `homeInput`<sup>Optional</sup> <a name="homeInput" id="@cdktf/provider-databricks.user.User.property.homeInput"></a>

```typescript
public readonly homeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.user.User.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `reposInput`<sup>Optional</sup> <a name="reposInput" id="@cdktf/provider-databricks.user.User.property.reposInput"></a>

```typescript
public readonly reposInput: string;
```

- *Type:* string

---

##### `userNameInput`<sup>Optional</sup> <a name="userNameInput" id="@cdktf/provider-databricks.user.User.property.userNameInput"></a>

```typescript
public readonly userNameInput: string;
```

- *Type:* string

---

##### `workspaceAccessInput`<sup>Optional</sup> <a name="workspaceAccessInput" id="@cdktf/provider-databricks.user.User.property.workspaceAccessInput"></a>

```typescript
public readonly workspaceAccessInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `aclPrincipalId`<sup>Required</sup> <a name="aclPrincipalId" id="@cdktf/provider-databricks.user.User.property.aclPrincipalId"></a>

```typescript
public readonly aclPrincipalId: string;
```

- *Type:* string

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-databricks.user.User.property.active"></a>

```typescript
public readonly active: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowClusterCreate`<sup>Required</sup> <a name="allowClusterCreate" id="@cdktf/provider-databricks.user.User.property.allowClusterCreate"></a>

```typescript
public readonly allowClusterCreate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowInstancePoolCreate`<sup>Required</sup> <a name="allowInstancePoolCreate" id="@cdktf/provider-databricks.user.User.property.allowInstancePoolCreate"></a>

```typescript
public readonly allowInstancePoolCreate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `databricksSqlAccess`<sup>Required</sup> <a name="databricksSqlAccess" id="@cdktf/provider-databricks.user.User.property.databricksSqlAccess"></a>

```typescript
public readonly databricksSqlAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `disableAsUserDeletion`<sup>Required</sup> <a name="disableAsUserDeletion" id="@cdktf/provider-databricks.user.User.property.disableAsUserDeletion"></a>

```typescript
public readonly disableAsUserDeletion: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-databricks.user.User.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktf/provider-databricks.user.User.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

---

##### `force`<sup>Required</sup> <a name="force" id="@cdktf/provider-databricks.user.User.property.force"></a>

```typescript
public readonly force: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `forceDeleteHomeDir`<sup>Required</sup> <a name="forceDeleteHomeDir" id="@cdktf/provider-databricks.user.User.property.forceDeleteHomeDir"></a>

```typescript
public readonly forceDeleteHomeDir: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `forceDeleteRepos`<sup>Required</sup> <a name="forceDeleteRepos" id="@cdktf/provider-databricks.user.User.property.forceDeleteRepos"></a>

```typescript
public readonly forceDeleteRepos: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `home`<sup>Required</sup> <a name="home" id="@cdktf/provider-databricks.user.User.property.home"></a>

```typescript
public readonly home: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.user.User.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `repos`<sup>Required</sup> <a name="repos" id="@cdktf/provider-databricks.user.User.property.repos"></a>

```typescript
public readonly repos: string;
```

- *Type:* string

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktf/provider-databricks.user.User.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

---

##### `workspaceAccess`<sup>Required</sup> <a name="workspaceAccess" id="@cdktf/provider-databricks.user.User.property.workspaceAccess"></a>

```typescript
public readonly workspaceAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.user.User.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.user.User.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### UserConfig <a name="UserConfig" id="@cdktf/provider-databricks.user.UserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.user.UserConfig.Initializer"></a>

```typescript
import { user } from '@cdktf/provider-databricks'

const userConfig: user.UserConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.user.UserConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.UserConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.UserConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.UserConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.UserConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.UserConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.UserConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.user.UserConfig.property.userName">userName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/user#user_name User#user_name}. |
| <code><a href="#@cdktf/provider-databricks.user.UserConfig.property.aclPrincipalId">aclPrincipalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/user#acl_principal_id User#acl_principal_id}. |
| <code><a href="#@cdktf/provider-databricks.user.UserConfig.property.active">active</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/user#active User#active}. |
| <code><a href="#@cdktf/provider-databricks.user.UserConfig.property.allowClusterCreate">allowClusterCreate</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/user#allow_cluster_create User#allow_cluster_create}. |
| <code><a href="#@cdktf/provider-databricks.user.UserConfig.property.allowInstancePoolCreate">allowInstancePoolCreate</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/user#allow_instance_pool_create User#allow_instance_pool_create}. |
| <code><a href="#@cdktf/provider-databricks.user.UserConfig.property.databricksSqlAccess">databricksSqlAccess</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/user#databricks_sql_access User#databricks_sql_access}. |
| <code><a href="#@cdktf/provider-databricks.user.UserConfig.property.disableAsUserDeletion">disableAsUserDeletion</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/user#disable_as_user_deletion User#disable_as_user_deletion}. |
| <code><a href="#@cdktf/provider-databricks.user.UserConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/user#display_name User#display_name}. |
| <code><a href="#@cdktf/provider-databricks.user.UserConfig.property.externalId">externalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/user#external_id User#external_id}. |
| <code><a href="#@cdktf/provider-databricks.user.UserConfig.property.force">force</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/user#force User#force}. |
| <code><a href="#@cdktf/provider-databricks.user.UserConfig.property.forceDeleteHomeDir">forceDeleteHomeDir</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/user#force_delete_home_dir User#force_delete_home_dir}. |
| <code><a href="#@cdktf/provider-databricks.user.UserConfig.property.forceDeleteRepos">forceDeleteRepos</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/user#force_delete_repos User#force_delete_repos}. |
| <code><a href="#@cdktf/provider-databricks.user.UserConfig.property.home">home</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/user#home User#home}. |
| <code><a href="#@cdktf/provider-databricks.user.UserConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/user#id User#id}. |
| <code><a href="#@cdktf/provider-databricks.user.UserConfig.property.repos">repos</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/user#repos User#repos}. |
| <code><a href="#@cdktf/provider-databricks.user.UserConfig.property.workspaceAccess">workspaceAccess</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/user#workspace_access User#workspace_access}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.user.UserConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.user.UserConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.user.UserConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.user.UserConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.user.UserConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.user.UserConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.user.UserConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktf/provider-databricks.user.UserConfig.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/user#user_name User#user_name}.

---

##### `aclPrincipalId`<sup>Optional</sup> <a name="aclPrincipalId" id="@cdktf/provider-databricks.user.UserConfig.property.aclPrincipalId"></a>

```typescript
public readonly aclPrincipalId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/user#acl_principal_id User#acl_principal_id}.

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktf/provider-databricks.user.UserConfig.property.active"></a>

```typescript
public readonly active: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/user#active User#active}.

---

##### `allowClusterCreate`<sup>Optional</sup> <a name="allowClusterCreate" id="@cdktf/provider-databricks.user.UserConfig.property.allowClusterCreate"></a>

```typescript
public readonly allowClusterCreate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/user#allow_cluster_create User#allow_cluster_create}.

---

##### `allowInstancePoolCreate`<sup>Optional</sup> <a name="allowInstancePoolCreate" id="@cdktf/provider-databricks.user.UserConfig.property.allowInstancePoolCreate"></a>

```typescript
public readonly allowInstancePoolCreate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/user#allow_instance_pool_create User#allow_instance_pool_create}.

---

##### `databricksSqlAccess`<sup>Optional</sup> <a name="databricksSqlAccess" id="@cdktf/provider-databricks.user.UserConfig.property.databricksSqlAccess"></a>

```typescript
public readonly databricksSqlAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/user#databricks_sql_access User#databricks_sql_access}.

---

##### `disableAsUserDeletion`<sup>Optional</sup> <a name="disableAsUserDeletion" id="@cdktf/provider-databricks.user.UserConfig.property.disableAsUserDeletion"></a>

```typescript
public readonly disableAsUserDeletion: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/user#disable_as_user_deletion User#disable_as_user_deletion}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-databricks.user.UserConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/user#display_name User#display_name}.

---

##### `externalId`<sup>Optional</sup> <a name="externalId" id="@cdktf/provider-databricks.user.UserConfig.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/user#external_id User#external_id}.

---

##### `force`<sup>Optional</sup> <a name="force" id="@cdktf/provider-databricks.user.UserConfig.property.force"></a>

```typescript
public readonly force: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/user#force User#force}.

---

##### `forceDeleteHomeDir`<sup>Optional</sup> <a name="forceDeleteHomeDir" id="@cdktf/provider-databricks.user.UserConfig.property.forceDeleteHomeDir"></a>

```typescript
public readonly forceDeleteHomeDir: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/user#force_delete_home_dir User#force_delete_home_dir}.

---

##### `forceDeleteRepos`<sup>Optional</sup> <a name="forceDeleteRepos" id="@cdktf/provider-databricks.user.UserConfig.property.forceDeleteRepos"></a>

```typescript
public readonly forceDeleteRepos: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/user#force_delete_repos User#force_delete_repos}.

---

##### `home`<sup>Optional</sup> <a name="home" id="@cdktf/provider-databricks.user.UserConfig.property.home"></a>

```typescript
public readonly home: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/user#home User#home}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.user.UserConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/user#id User#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `repos`<sup>Optional</sup> <a name="repos" id="@cdktf/provider-databricks.user.UserConfig.property.repos"></a>

```typescript
public readonly repos: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/user#repos User#repos}.

---

##### `workspaceAccess`<sup>Optional</sup> <a name="workspaceAccess" id="@cdktf/provider-databricks.user.UserConfig.property.workspaceAccess"></a>

```typescript
public readonly workspaceAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.23.0/docs/resources/user#workspace_access User#workspace_access}.

---



